export interface HTMLParserHandler {
  comment?: (text: string) => void;
  chars?: (text: string) => void;
  start?: (tag: string, attrs: any, unary: boolean) => void;
  end?: (tag: string) => void;
}

export class HTMLParser {
  static makeMap(str: string) {
    const obj = Object.create(null);
    const items = str.split(",");
    for (let i = 0; i < items.length; i++) {
      obj[items[i]] = true;
    }
    return obj;
  }

  static startTag = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/

  static endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/

  static attr = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g

  // Empty Elements - HTML 4.01
  static empty = this.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");

  // Block Elements - HTML 4.01
  static block = this.makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");

  // Inline Elements - HTML 4.01
  static inline = this.makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  static closeSelf = this.makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

  // Attributes that have their values filled in disabled="disabled"
  static fillAttrs = this.makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

  // Special Elements (can contain anything)
  static special = this.makeMap("script,style");

  private stack: string[] = [];
  private last: string;
  private handler: HTMLParserHandler;

  constructor(private html: string, handler: HTMLParserHandler) {
    this.last = html;
    this.handler = handler;
    this.parseHTML();
  }

  private top() {
    return this.stack[this.stack.length - 1];
  }

  private parseHTML() {
    let index: number | undefined;
    let chars: boolean;
    let match: any;
    let html = this.html;

    while (html) {
      chars = true;

      // Make sure we're not in a script or style element
      if (!this.top() || !HTMLParser.special[this.top()])
        ({ index, html } = this.handleNode(index, match, html, chars))
      else
        html = this.handleScript(html);

      if (html == this.last) {
        throw "Parse Error: " + html;
      }
      this.last = html;
    }

    // Clean up any remaining tags
    this.parseEndTag();
  }

  private handleNode(index: number | undefined, match: any, html: string, chars: boolean) {

    ({ index, match } = this.handleNormalNode(html, chars, match));

    if (chars) {
      index = html.indexOf("<");

      const text = index < 0 ? html : html.substring(0, index);
      html = index < 0 ? "" : html.substring(index);

      this.dumpHandlerChars(text);
    }

    return { index, html };
  }

  private dumpHandlerChars(text: string) {
    if (this.handler.chars) {
      this.handler.chars(text);
    }
  }

  private handleScript(html: string) {

    html = html.replace(new RegExp("(.*)<\/" + this.top() + "[^>]*>"), (all: string, text: string) => {
      text = text.replace(/<!--(.*?)-->/g, "$1")
        .replace(/<!\[CDATA\[(.*?)]]>/g, "$1");

      this.dumpHandlerChars(text);

      return "";
    });

    this.parseEndTag("", this.top());

    return html;
  }

  private handleNormalNode(html: string, chars: boolean, match: any) {
    let index: number | undefined;

    // Comment
    if (html.indexOf("<!--") == 0) {
      index = html.indexOf("-->");

      ({ html, chars } = this.handleComment(index, html, chars));

    }

    // end tag
    else if (html.indexOf("</") == 0) {
      match = html.match(HTMLParser.endTag);

      ({ html, chars } = this.handleEndTag(match, html, chars));

    }

    // start tag
    else if (html.indexOf("<") == 0) {
      match = html.match(HTMLParser.startTag);

      ({ html, chars } = this.handleStartTag(match, html, chars));
    }

    return { index, match };
  }

  private handleStartTag(match: any, html: string, chars: boolean) {
    if (match) {
      html = html.substring(match[0].length);
      match[0].replace(HTMLParser.startTag, this.parseStartTag.bind(this));
      chars = false;
    }
    return { html, chars };
  }

  private handleEndTag(match: any, html: string, chars: boolean) {
    if (match) {
      html = html.substring(match[0].length);
      match[0].replace(HTMLParser.endTag, this.parseEndTag.bind(this));
      chars = false;
    }
    return { html, chars };
  }

  private handleComment(index: number, html: string, chars: boolean) {
    if (index >= 0) {
      if (this.handler.comment) {
        this.handler.comment(html.substring(4, index));
      }
      html = html.substring(index + 3);
      chars = false;
    }
    return { html, chars };
  }

  private parseStartTag(tag: string, tagName: string, rest: string, unary: string) {
    tagName = tagName.toLowerCase();

    if (HTMLParser.block[tagName]) {
      while (this.top() && HTMLParser.inline[this.top()]) {
        this.parseEndTag("", this.top());
      }
    }

    if (HTMLParser.closeSelf[tagName] && this.top() == tagName) {
      this.parseEndTag("", tagName);
    }

    unary = HTMLParser.empty[tagName] || !!unary;

    if (!unary) {
      this.stack.push(tagName);
    }

    if (this.handler.start) {
      const attrs = Object.create(null);

      rest.replace(HTMLParser.attr, (match: string, name: string) => {
        name = name.toLowerCase();

        const value = arguments[2] ? arguments[2] :
          arguments[3] ? arguments[3] :
            arguments[4] ? arguments[4] :
              HTMLParser.fillAttrs[name] ? name : "";

        attrs[name] = value;

        return match;
      });

      if (this.handler.start) {
        this.handler.start(tagName, attrs, !!unary);
      }
    }
  }

  private parseEndTag(tag?: string, tagName?: string) {

    // If no tag name is provided, clean shop
    if (!tagName)
      var pos = 0;

    // Find the closest opened tag of the same type
    else
      for (var pos = this.stack.length - 1; pos >= 0; pos--)
        if (this.stack[pos] == tagName)
          break;

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = this.stack.length - 1; i >= pos; i--)
        if (this.handler.end) {
          this.handler.end(this.stack[i]);
        }

      // Remove the open elements from the stack
      this.stack.length = pos;
    }

  }
}