import runtime from '../../getRuntime';


export type XMLArgs = Boolean | null | Number | Object | String | undefined | AS3_XML | AS3_XMLList;


export type XMLNodeTypes =
  typeof AS2_XMLNodeType.ELEMENT_NODE
  | typeof AS2_XMLNodeType.TEXT_NODE


export type InternalNodeTypes = XMLNodeTypes
  | typeof AS2_XMLNodeType.ENTITY_REFERENCE_NODE
  | typeof AS2_XMLNodeType.PROCESSING_INSTRUCTION_NODE
  | typeof AS2_XMLNodeType.DOCUMENT_NODE
  | typeof AS2_XMLNodeType.DOCUMENT_FRAGMENT_NODE;


// ---


class AS3_XMLModule {
  static AS3_XMLModule = this
  AS3_XMLModule = AS3_XMLModule

  XMLDocument = AS2_XMLDocument
  XMLNode = AS2_XMLNode
  XMLNodeType = AS2_XMLNodeType
  XMLListClass = AS3_XMLList
  XMLClass = AS3_XML
  DTDMaker = DTDMaker

  XMLDefaultsClass = XMLModuleDefaultsClass
  XMLDefaults = new XMLModuleDefaultsClass;

  static isXMLName(name: string): boolean {
    return !!name?.match?.(/^[a-zA-Z0-9_-]+$/)
  }
  isXMLName = AS3_XMLModule.isXMLName

  /** XML(expression:Object):XML
   *
   * Converts an object to an XML object.
   *
   * The following table describes return values for various input types.
   *
   * Parameter | Type	Return Value
   * * Boolean | Value is first converted to a string, then converted to an XML object.
   * * Null | A runtime error occurs (TypeError exception).
   * * Number | Value is first converted to a string, then converted to an XML object.
   * * Object | Converts to XML only if the value is a String, Number or Boolean value. Otherwise a runtime error occurs (TypeError exception).
   * * String | Value is converted to XML.
   * * Undefined | A runtime error occurs (TypeError exception).
   * * XML | Input value is returned unchanged.
   * * XMLList | Returns an XML object only if the XMLList object contains only one property of type XML. Otherwise a runtime error occurs (TypeError exception).
  */
  static XML(xml: XMLArgs) {
    if (xml instanceof AS3_XML)
      return xml;
    if (xml instanceof AS3_XMLList)
      // if (xml.length() == 1) return new AS3_XML(xml.nodes[0]); // @Todo
      if (xml.length() == 1) { }
      else throw new Error("XMLList must contain only one property of type XML");

    if (typeof xml === "boolean" || typeof xml === "number")
      return new AS3_XML(xml.toString());
    if (typeof xml === "string")
      return new AS3_XML(xml);
    if (xml === undefined)
      throw new TypeError("Undefined");
    throw new TypeError("Invalid argument");
  }
  XML = AS3_XMLModule.XML

  /**	XMLList(expression:Object):XMLList
   * 
   * Converts an object to an XMLList object.
   *
   * The following table describes return values for various input types.
   *
   * Parameter Type |	Return Value
   * * Boolean | Value is first converted to a string, then converted to an XMLList object.
   * * Null | A runtime error occurs (TypeError exception).
   * * Number | Value is first converted to a string, then converted to an XMLList object.
   * * Object | Converts to XMLList only if the value is a String, Number or Boolean value. Otherwise a runtime error occurs (TypeError exception).
   * * String | Value is converted to an XMLList object.
   * * Undefined | A runtime error occurs (TypeError exception).
   * * XML | Value is converted to an XMLList object.
   * * XMLList | Input value is returned unchanged.
  */
  static XMLList(xml: XMLArgs) {
    if (xml instanceof AS3_XMLList)
      return xml;
    if (typeof xml === "boolean" || typeof xml === "number")
      return new AS3_XMLList(xml.toString());
    if (typeof xml === "string")
      return new AS3_XMLList(xml);
    if (xml === undefined)
      throw new TypeError("Undefined");
    throw new TypeError("Invalid argument");
  }
  XMLList = AS3_XMLModule.XMLList
}


// ---


// @ Export
export const ASXML = new AS3_XMLModule;

if (globalThis?.window)
  (globalThis.window as any).ASXML = ASXML


// ---


class XMLModuleDefaultsClass implements AST_XMLModuleDefaultsClass {
  static self = this
  self = XMLModuleDefaultsClass

  /**
   * Determines whether XML comments are ignored when XML objects parse the source XML data.
   * By default, the comments are ignored (true).
   * To include XML comments, set this property to false.
   * The ignoreComments property is used only during the XML parsing, not during the call to any method such as myXMLObject.child(*).toXMLString().
   * If the source XML includes comment nodes, they are kept or discarded during the XML parsing.  
  */
  ignoreComments = true
  /**
   * Determines whether XML processing instructions are ignored when XML objects parse the source XML data. By default, the processing instructions are ignored (true).
   * To include XML processing instructions, set this property to false.
   * The ignoreProcessingInstructions property is used only during the XML parsing, not during the call to any method such as myXMLObject.child(*).toXMLString().
   * If the source XML includes processing instructions nodes, they are kept or discarded during the XML parsing.
  */
  ignoreProcessingInstructions = true
  /**
   * Determines whether white space characters at the beginning and end of text nodes are ignored during parsing.
   * By default, white space is ignored (true).
   * If a text node is 100% white space and the ignoreWhitespace property is set to true, then the node is not created.
   * To show white space in a text node, set the ignoreWhitespace property to false.
   *
   * When you create an XML object, it caches the current value of the ignoreWhitespace property.
   * Changing the ignoreWhitespace does not change the behavior of existing XML objects.
  */
  ignoreWhitespace = true
  /**
   * Determines the amount of indentation applied by the toString() and toXMLString() methods when the XML.prettyPrinting property is set to true.
   * Indentation is applied with the space character, not the tab character. The default value is 2.
   */
  prettyIndent = 2
  /**
   * Determines whether the toString() and toXMLString() methods normalize white space characters between some tags.
   * The default value is true.
   */
  prettyPrinting = true

  defaultSettings() {
    return new this.self;
  }
}


/** An AS3-Standard-Like XMLNS
 * 
 * The Namespace class contains methods and properties for defining and working with namespaces.
 * There are three scenarios for using namespaces:
 * * Namespaces of XML objects Namespaces associate a namespace prefix with a Uniform Resource Identifier (URI) that identifies the namespace.
 *   The prefix is a string used to reference the namespace within an XML object. If the prefix is undefined, when the XML is converted to a string, a prefix is automatically generated.
 * * Namespace to differentiate methods Namespaces can differentiate methods with the same name to perform different tasks.
 *   If two methods have the same name but separate namespaces, they can perform different tasks.
 * * Namespaces for access control Namespaces can be used to control access to a group of properties and methods in a class.
 *   If you place the properties and methods into a private namespace, they are inaccessible to any code that does not have access to that namespace.
 *   You can grant access to the group of properties and methods by passing the namespace to other classes, methods or functions.
 * This class shows two forms of the constructor method because each form accepts different parameters.
 *
 * This class (along with the XML, XMLList, and QName classes) implements powerful XML-handling standards defined in ECMAScript for XML (E4X) specification (ECMA-357 edition 2).
 */
class AS3_XMLNamespace {
  /** constructor(prefix: String, uri: String)
   *
   * Creates a Namespace object according to the values of the prefixValue and uriValue parameters.
   * This constructor requires both parameters.
   *
   * The value of the prefixValue parameter is assigned to the prefix property as follows:
   *
   * * If undefined is passed, prefix is set to undefined.
   * * If the value is a valid XML name, as determined by the isXMLName() function, it is converted to a string and assigned to the prefix property.
   * * If the value is not a valid XML name, the prefix property is set to undefined.
   *
   * The value of the uriValue parameter is assigned to the uri property as follows:
   *
   * * If a QName object is passed, the uri property is set to the value of the QName object's uri property.
   * * Otherwise, the uriValue parameter is converted to a string and assigned to the uri property.
  */
  constructor(
    public readonly prefix: undefined | string,
    public readonly uri: AS3_QName | string
  ) {
    if (uri instanceof AS3_QName) uri = uri.uri + '';
  }

  /** Namespace(prefixValue:*, uriValue:*)
   * 
   * Creates a Namespace object according to the values of the prefixValue and uriValue parameters.
   * This constructor requires both parameters.
   *
   * The value of the prefixValue parameter is assigned to the prefix property as follows:
   *
   * * If undefined is passed, prefix is set to undefined.
   * * If the value is a valid XML name, as determined by the isXMLName() function, it is converted to a string and assigned to the prefix property.
   * If the value is not a valid XML name, the prefix property is set to undefined.
   * The value of the uriValue parameter is assigned to the uri property as follows:
   *
   * * If a QName object is passed, the uri property is set to the value of the QName object's uri property.
   * * Otherwise, the uriValue parameter is converted to a string and assigned to the uri property.
   *
   * Namespace(uriValue:*)
   *
   * Creates a Namespace object.
   * The values assigned to the uri and prefix properties of the new Namespace object depend on the type of value passed for the uriValue parameter:
   * 
   * * If no value is passed, the prefix and uri properties are set to an empty string.
   * * If the value is a Namespace object, a copy of the object is created.
   * * If the value is a QName object, the uri property is set to the uri property of the QName object.
  */
  Namespace(...args: [AS3_QName | string] | [undefined | string, AS3_QName | string]) {
    let prefix: typeof args[0] = args[0];
    let uri: typeof args[1] = args?.[1];

    if (prefix == void 0) prefix = void 0;
    else if (args.length === 2 && !AS3_XMLModule.isXMLName(prefix as string)) prefix = void 0;

    if (uri instanceof AS3_QName)
      uri = uri.uri + '';

    return new AS3_XMLNamespace(prefix!.toString(), uri!)
  }

  /** toString():String
   * 
   * Equivalent to the Namespace.uri property.
   * * Namespace
  */
  toString(): string {
    return this.uri.toString() || ''
  }
}


/** An AS3-Standard-Like XML QName
 * 
 * QName objects represent qualified names of XML elements and attributes.
 * Each QName object has a local name and a namespace Uniform Resource Identifier (URI).
 * When the value of the namespace URI is null, the QName object matches any namespace.
 * Use the QName constructor to create a new QName object that is either a copy of another QName object or a new QName object with a uri from a Namespace object and a localName from a QName object.
 * Methods specific to E4X can use QName objects interchangeably with strings.
 * E4X methods are in the QName, Namespace, XML, and XMLList classes.
 * These E4X methods, which take a string, can also take a QName object.
 * This interchangeability is how namespace support works with, for example, the XML.child() method.
 *
 * The QName class (along with the XML, XMLList, and Namespace classes) implements powerful XML-handling standards defined in ECMAScript for XML (E4X) specification (ECMA-357 edition 2).
 *
 * A qualified identifier evaluates to a QName object.
 * If the QName object of an XML element is specified without identifying a namespace, the uri property of the associated QName object is set to the global default namespace.
 * If the QName object of an XML attribute is specified without identifying a namespace, the uri property is set to an empty string.
 */
class AS3_QName {
  readonly #localName: string;
  readonly #uri: string | null;

  get localName(): string {
    return this.#localName;
  }

  get uri(): string | null {
    return this.#uri;
  }

  /** QName(qname:QName)
   *
   * Creates a QName object that is a copy of another QName object.
   * If the parameter passed to the constructor is a QName object, a copy of the QName object is created.
   * If the parameter is not a QName object, the parameter is converted to a string and assigned to the localName property of the new QName instance.
   * If the parameter is undefined or unspecified, a new QName object is created with the localName property set to the empty string.
   *
   * QName(uri:Namespace, localName:QName)
   *
   * Creates a QName object with a URI from a Namespace object and a localName from a QName object.
   * If either parameter is not the expected data type, the parameter is converted to a string and assigned to the corresponding property of the new QName object.
   * For example, if both parameters are strings, a new QName object is returned with a uri property set to the first parameter and a localName property set to the second parameter.
   * In other words, the following permutations, along with many others, are valid forms of the constructor:
   *
   * * QName (uri:Namespace, localName:String);
   * * QName (uri:String, localName: QName);
   * * QName (uri:String, localName: String);
   * If you pass null for the uri parameter, the uri property of the new QName object is set to null.
  */
  constructor(...args: [string | AS3_XMLNamespace | null, string | AS3_QName] | [AS3_QName]) {
    var localName: any, uri: any;

    if (args.length === 1 && args[0] instanceof AS3_QName)
      [{ localName, uri }] = args

    else if (args.length === 2) {
      let [arg0, arg1] = args;

      if (typeof arg0 === "string")
        uri = arg0;
      else if (arg0 instanceof AS3_XMLNamespace)
        uri = arg0.uri;
      else
        uri = null

      if (typeof arg1 === "string")
        localName = arg1;
      else
        localName = arg1.localName;
    }

    else throw new Error("Invalid arguments")

    this.#localName = localName;
    this.#uri = uri;
  }

  /** QName(qname:QName)
   *
   * Creates a QName object that is a copy of another QName object.
   * * QName
   *
   * QName(uri:Namespace, localName:QName)
   *
   * Creates a QName object with a URI from a Namespace object and a localName from a QName object.
   * * QName
  */
  QName(...args: [AS3_QName] | [AS3_XMLNamespace, AS3_QName]) {
    return new AS3_QName(...args);
  }

  /** toString():String
   *
   * Returns a string composed of the URI, and the local name for the QName object, separated by "::".
   *
   * The format depends on the uri property of the QName object:
   *
   * ```
   * If uri == ""
   *     toString returns localName
   *   else if uri == null
   *     toString returns *::localName
   *   else
   *     toString returns uri::localName
   * ```
  */
  toString(): string {
    if (this.#uri == "")
      return this.#localName;
    else if (this.#uri == null)
      return "*::" + this.#localName;
    else
      return this.#uri + "::" + this.#localName;
  }

  /** valueOf():QName
   *
   * Returns the QName object.
   * * QName
  */
  valueOf(): AS3_QName {
    return this;
  }

}


/** 
 * The XMLNodeType class contains constants used with XMLNode.nodeType.
 * The values are defined by the NodeType enumeration in the W3C DOM Level 1 recommendation: http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
 */
class AS2_XMLNodeType {
  /** ELEMENT_NODE:uint = 1
   * 
   * Specifies that the node is an element.
   * This constant is used with XMLNode.nodeType.
   * The value is defined by the NodeType enumeration in the W3C DOM Level 1 recommendation: http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
   */
  static readonly ELEMENT_NODE = 1;

  /** TEXT_NODE:uint = 3
   *
   * Specifies that the node is a text node.
   * This constant is used with XMLNode.nodeType.
   * The value is defined by the NodeType enumeration in the W3C DOM Level 1 recommendation: http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
   */
  static readonly TEXT_NODE = 3;

  // ---
  // These are Nodetypes not defined on the AS2_XMLNodeType class.
  // They are defined elsewhere, and can't be handled in XML, but this is bad practice.
  // They can be found here instead, since there is no reason for not having these either.
  // ---

  static readonly ENTITY_REFERENCE_NODE = 5;
  static readonly PROCESSING_INSTRUCTION_NODE = 7;
  static readonly DOCUMENT_NODE = 9;
  static readonly DOCUMENT_FRAGMENT_NODE = 11;
}


/** An AS2-Standard-Like XMLNode
 * 
 * The XMLNode class represents the legacy XML object that was present in ActionScript 2.0 and that was renamed in ActionScript 3.0.
 * In ActionScript 3.0, consider using the new top-level XML class and related classes instead, which support E4X (ECMAScript for XML). The XMLNode class is present for backward compatibility.
 */
class AS2_XMLNode {
  /** attributes:Object
   * 
   * An object containing all of the attributes of the specified XMLNode instance.
   * The XMLNode.attributes object contains one variable for each attribute of the XMLNode instance.
   * Because these variables are defined as part of the object, they are generally referred to as properties of the object.
   * The value of each attribute is stored in the corresponding property as a string.
   * For example, if you have an attribute named color, you would retrieve that attribute's value by specifying color as the property name, as the following code shows:
   * ```as
   * 	 var myColor:String = doc.firstChild.attributes.color
   * ```
   */
  attributes: Record<string, string> = {}

  // @important
  /** childNodes:Array  [read-only]
   * 
   * An array of the specified XMLNode object's children.
   * Each element in the array is a reference to an XMLNode object that represents a child node.
   * This is a read-only property and cannot be used to manipulate child nodes.
   * Use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   *
   * This property is undefined for text nodes (nodeType == 3).
   */
  get childNodes(): Array<AS2_XMLNode> | undefined {
    return this.#childNodes
  }

  #childNodes: Array<AS2_XMLNode> | undefined =
    this.nodeType == 3 ? undefined : [];

  /** firstChild:XMLNode  [read-only]
   *
   * Evaluates the specified XMLDocument object and references the first child in the parent node's child list.
   * This property is null if the node does not have children.
   * This property is undefined if the node is a text node.
   * This is a read-only property and cannot be used to manipulate child nodes; use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   */
  get firstChild(): AS2_XMLNode | null | undefined {
    return this.childNodes?.[0]
  }

  /** lastChild:XMLNode
   * 
   * An XMLNode value that references the last child in the node's child list.
   * The XMLNode.lastChild property is null if the node does not have children.
   * This property cannot be used to manipulate child nodes; use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   */
  get lastChild(): AS2_XMLNode | null {
    return this.childNodes?.[this.childNodes.length - 1] || null
  }

  /** localName:String  [read-only]
   *
   * The local name portion of the XML node's name.
   * This is the element name without the namespace prefix. For example, the node <contact:mailbox/>bob@example.com</contact:mailbox> has the local name "mailbox", and the prefix "contact", which comprise the full element name "contact.mailbox".
   *
   * You can access the namespace prefix through the prefix property of the XML node object.
   * The nodeName property returns the full name (including the prefix and the local name).
   */
  get localName(): string {
    return this.#localName
  }
  #localName: string = ''

  withLocalName(localName: string) {
    if (this.#localName) throw new Error("Cannot change local name, this is Internal.");
    this.#localName = localName
    return this
  }

  /** namespaceURI:String  [read-only]
   * 
   * If the XML node has a prefix, namespaceURI is the value of the xmlns declaration for that prefix (the URI), which is typically called the namespace URI. The xmlns declaration is in the current node or in a node higher in the XML hierarchy.
   *
   * If the XML node does not have a prefix, the value of the namespaceURI property depends on whether there is a default namespace defined (as in xmlns="http://www.example.com/").
   * If there is a default namespace, the value of the namespaceURI property is the value of the default namespace.
   * If there is no default namespace, the namespaceURI property for that node is an empty string ("").
   *
   * You can use the getNamespaceForPrefix() method to identify the namespace associated with a specific prefix.
   * The namespaceURI property returns the prefix associated with the node name.
   */
  get namespaceURI(): string {
    return this.prefix == null ? '' : this.prefix
  }

  /** nextSibling:XMLNode  [read-only]
   * 
   * An XMLNode value that references the next sibling in the parent node's child list. This property is null if the node does not have a next sibling node.
   * This property cannot be used to manipulate child nodes; use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   */
  get nextSibling(): AS2_XMLNode | null {
    return this.parentNode?.childNodes?.[this.parentNode.childNodes.indexOf(this) + 1] || null
  }

  // @important
  /** nodeName:String  [read-only]
   *
   * A string representing the node name of the XMLNode object.
   *
   * If the XMLNode object is an XML element (nodeType == 1), nodeName is the name of the tag that represents the node in the XML file.
   *
   * For example, TITLE is the nodeName of an HTML TITLE tag.
   *
   * If the XMLNode object is a text node (nodeType == 3), nodeName is null.
   */
  get nodeName(): string | null {
    return this.nodeType == 1 ? this.localName : null
  }

  // @Todo
  /** nodeType:uint  
   *
   * A nodeType constant value, either XMLNodeType.ELEMENT_NODE for an XML element or
   * XMLNodeType.TEXT_NODE for a text node.
   *
   * The nodeType is a numeric value from the NodeType enumeration in the W3C DOM Level 1 recommendation: http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html.
   * The following table lists the values:
   *
   * Integer value	Defined constant
   * * 1	ELEMENT_NODE
   * * 3	TEXT_NODE
   * * 5	ENTITY_REFERENCE_NODE
   * * 7	PROCESSING_INSTRUCTION_NODE
   * * 9	DOCUMENT_NODE
   * * 11	DOCUMENT_FRAGMENT_NODE
   * 
   * In Flash Player, the built-in XMLNode class only supports XMLNodeType.ELEMENT_NODE and XMLNodeType.TEXT_NODE.
   */
  get nodeType() {
    return this.#nodeType
  }
  #nodeType:
    typeof AS2_XMLNodeType.ELEMENT_NODE
    | typeof AS2_XMLNodeType.TEXT_NODE
    = 1

  /** nodeValue:String  
   *
   * The node value of the XMLDocument object.
   * If the XMLDocument object is a text node, the nodeType is 3, and the nodeValue is the text of the node.
   * If the XMLDocument object is an XML element (nodeType is 1), nodeValue is null and read-only.
   */
  get nodeValue(): string | null {
    return this.#nodeType == 3 ? this.#nodeValue : null
  }
  #nodeValue: string | null = null

  set nodeValue(value: string | null) {
    if (this.#nodeType == 1) throw new Error("Invalid node type")
    this.#nodeValue = value
  }

  /** parentNode:XMLNode
   *
   * An XMLNode value that references the parent node of the specified XML object, or returns null if the node has no parent.
   * This is a read-only property and cannot be used to manipulate child nodes; use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   */
  get parentNode(): AS2_XMLNode | null {
    return this.#parentNode
  }
  #parentNode: AS2_XMLNode | null = null

  /** prefix:String  [read-only]
   *
   * The prefix portion of the XML node name. For example, the node <contact:mailbox/>bob@example.com</contact:mailbox> prefix "contact" and the local name "mailbox", which comprise the full element name "contact.mailbox".
   *
   * The nodeName property of an XML node object returns the full name (including the prefix and the local name).
   * You can access the local name portion of the element's name via the localName property.
   */
  get prefix(): string | null | undefined {
    return this.nodeName?.split(':')[0]
  }

  /** previousSibling:XMLNode
   * 
   * An XMLNode value that references the previous sibling in the parent node's child list.
   * The property has a value of null if the node does not have a previous sibling node.
   * This property cannot be used to manipulate child nodes; use the appendChild(), insertBefore(), and removeNode() methods to manipulate child nodes.
   */
  get previousSibling(): AS2_XMLNode | null | undefined {
    return this.parentNode?.childNodes?.[this.parentNode.childNodes.indexOf(this) - 1]
  }

  /** XMLNode(type:uint, value:String)
   *
   * Creates a new XMLNode object. You must use the constructor to create an XMLNode object before you call any of the methods of the XMLNode class.
   *
   * Note: Use the createElement() and createTextNode() methods to add elements and text nodes to an XML document tree.
   */
  constructor(
    type: XMLNodeTypes,
    value?: string | null
  ) {
    this.#nodeType = type
    this.#nodeValue = value || null
  }

  /** appendChild(node:XMLNode):void
   * 
   * Appends the specified node to the XML object's child list.
   * This method operates directly on the node referenced by the childNode parameter; it does not append a copy of the node. If the node to be appended already exists in another tree structure, appending the node to the new location will remove it from its current location.
   * If the childNode parameter refers to a node that already exists in another XML tree structure, the appended child node is placed in the new tree structure after it is removed from its existing parent node.
   */
  appendChild(node: AS2_XMLNode): void {
    if (this.nodeType == 3)
      throw new Error("Invalid node type")
    if (this.#childNodes == undefined)
      this.#childNodes = []
    this.#childNodes.push(node)

    let pn = node.#parentNode
    if (pn == this) return;

    if (pn != undefined)
      pn.#removeChild(node)

    node.#parentNode = this
  }

  #removeChild(node: AS2_XMLNode): void {
    let i = this.#childNodes?.indexOf(node) || -1
    if (i == -1) return;
    this.#childNodes?.splice(i, 1)
  }

  /** cloneNode(deep:Boolean):XMLNode
   * 
   * Constructs and returns a new XML node of the same type, name, value, and attributes as the specified XML object.
   * If deep is set to true, all child nodes are recursively cloned, resulting in an exact copy of the original object's document tree.
   *
   * The clone of the node that is returned is no longer associated with the tree of the cloned item.
   * Consequently, nextSibling, parentNode, and previousSibling all have a value of null.
   * If the deep parameter is set to false, or the my_xml node has no child nodes, firstChild and lastChild are also null.
   */
  cloneNode(deep: boolean): AS2_XMLNode {
    let node = new AS2_XMLNode(this.nodeType, this.#nodeValue)
    if (deep && (this.#childNodes != undefined))
      for (const child of this.#childNodes)
        node.appendChild(child.cloneNode(deep))
    return node
  }

  /** getNamespaceForPrefix(prefix:String):String
   * 
   * Returns the namespace URI that is associated with the specified prefix for the node.
   * To determine the URI, getPrefixForNamespace() searches up the XML hierarchy from the node, as necessary, and returns the namespace URI of the first xmlns declaration for the given prefix.
   *
   * If no namespace is defined for the specified prefix, the method returns null.
   *
   * If you specify an empty string ("") as the prefix and there is a default namespace defined for the node (as in xmlns="http://www.example.com/"), the method returns that default namespace URI.
   */
  getNamespaceForPrefix(prefix: string): string | null {
    if (prefix == '') return this.namespaceURI
    let node: AS2_XMLNode | null = this
    while (node != null) {
      if (node.prefix == prefix)
        return node.namespaceURI
      node = node.parentNode
    }
    return null
  }

  /** hasChildNodes():Boolean
   * 
   * Indicates whether the specified XMLNode object has child nodes.
   * This property is true if the specified XMLNode object has child nodes; otherwise, it is false.
   */
  hasChildNodes(): boolean {
    return this.#childNodes != undefined
  }

  /** insertBefore(node:XMLNode, before:XMLNode):void
   *
   * Inserts a new child node into the XML object's child list, before the beforeNode node.
   * If the beforeNode parameter is undefined or null, the node is added using the appendChild() method.
   * If beforeNode is not a child of my_xml, the insertion fails.
   */
  insertBefore(node: AS2_XMLNode, before: AS2_XMLNode | null): void {
    if (this.nodeType == 3)
      throw new Error("Invalid node type")
    if (this.#childNodes == undefined)
      this.#childNodes = []

    if (before == null)
      this.appendChild(node)
    else if (this.#childNodes.indexOf(before) == -1)
      throw new Error("Invalid node")
    else
      this.#childNodes.splice(this.#childNodes.indexOf(before), 0, node)
  }

  /** removeNode():void
   * Removes the specified XML object from its parent.
   * Also deletes all descendants of the node.
   */
  removeNode(): void {
    if (this.#parentNode == null)
      throw new Error("Invalid node")

    this.#parentNode.#childNodes?.splice(this.#parentNode.#childNodes.indexOf(this), 1)
    this.#parentNode = null

    if (this.#childNodes) for (const child of this.#childNodes)
      child.removeNode()
  }

  /** toString():String 
   * Evaluates the specified XMLNode object, constructs a textual representation of the XML structure, including the node, children, and attributes, and returns the result as a string.
   *
   * For top-level XMLDocument objects (those created with the constructor), the XMLDocument.toString() method outputs the document's XML declaration (stored in the XMLDocument.xmlDecl property), followed by the document's DOCTYPE declaration (stored in the XMLDocument.docTypeDecl property), followed by the text representation of all XML nodes in the object.
   * The XML declaration is not output if the XMLDocument.xmlDecl property is null. The DOCTYPE declaration is not output if the XMLDocument.docTypeDecl property is null.
   */
  toString(): string {
    let str = ''
    if (this.nodeType == 3)
      return str += this.nodeValue

    str += '<' + this.nodeName
    if (this.nodeType == 1 && this.attributes != undefined)
      for (const attr of Object.entries(this.attributes))
        str += ` ${attr[0]}="${attr[1]}"`

    if (this.#childNodes == undefined)
      return str += ' />';

    str += '>'

    for (const child of this.#childNodes)
      str += child.toString()

    str += '</' + this.nodeName + '>'

    return str
  }
}


type DTDEntity = '&lt;' | '&gt;' | '&amp;' | '&apos;' | '&quot;'
type DTDEntRes = '<' | '>' | '&' | "'" | '"'

type DTDAttrType =
  'CDATA'
  | 'ID'
  | 'IDREF'
  | 'IDREFS'
  | 'NMTOKEN'
  | 'NMTOKENS'
  | 'ENTITY'
  | 'ENTITIES'
  | 'NOTATION'

class DTDMaker {
  // PUBLIC "http://www.ibm.com/example.dtd" "example.dtd"
  static SYSTEM(file: string) {
    return `SYSTEM "${file}"`
  }
  readonly SYSTEM = DTDMaker.SYSTEM

  static PUBLIC(uri: string, file: string) {
    return `PUBLIC "${uri}" "${file}"`
  }
  readonly PUBLIC = DTDMaker.PUBLIC

  static INTERNAL(blocks: string[]) {
    return `[\n${blocks.join('\n')}\n]`
  }
  readonly INTERNAL = DTDMaker.INTERNAL

  static #entityMap: [DTDEntity, DTDEntRes][] = [
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&amp;', '&'],
    ['&apos;', "'"],
    ['&quot;', '"'],
  ]

  static parseEntity(kind: DTDEntity): DTDEntRes | undefined {
    return this.#entityMap.find(e => e[0] == kind)?.[1]
  }
  readonly parsenEntity = DTDMaker.parseEntity

  static getEntity(kind: DTDEntRes): DTDEntity | undefined {
    return this.#entityMap.find(e => e[1] == kind)?.[0]
  }
  readonly getEntity = DTDMaker.getEntity

  static DTDMixedSelect = class DTDMixedSelect extends Array {
    constructor(arr: string[]) {
      super(arr.length)
      this.fill(void 0 as any)
      this.map((_, i) => arr[i])
    }

    toString(): string {
      return this.join('|')
    }
  }
  readonly DTDMixedSelect = DTDMaker.DTDMixedSelect

  static makeMixedSelect(arr: string[]) {
    return new this.DTDMixedSelect(arr)
  }
  readonly makeMixedSelect = DTDMaker.makeMixedSelect

  static makeElement(name: string, cont: string | string[] | DTDMaker['DTDMixedSelect'] | 'EMPTY' | 'ANY', isCategory = true) {
    if (cont == 'EMPTY') isCategory = true
    else if (cont == '#PCDATA') isCategory = false
    else if (Array.isArray(cont)) isCategory = true

    cont = cont.toString()
    return `<!ELEMENT ${name} ${isCategory ? `(${cont})` : cont}>`
  }
  readonly makeElement = DTDMaker.makeElement

  static makeAttribute(elementName: string, name: string, type: string, def: DTDAttrType | DTDMaker['DTDMixedSelect'], isRequired = false, isImplied = false, isFixed = false) {
    let str = `<!ATTLIST ${elementName} ${name} ${type}`
    if (isRequired) str += ' #REQUIRED'
    if (isImplied) str += ' #IMPLIED'
    if (isFixed) str += ' #FIXED'

    if (type == 'IDREFS' || type == 'NMTOKENS') {
      str += ' ('
      str += def.toString()
      str += ')'
    } else {
      str += ` ${def}`
    }

    str += '>'

    return str
  }
  readonly makeAttribute = DTDMaker.makeAttribute

  static makeEntity(name: string, value: string, externalNS: string) {
    return `<!ENTITY ${name} ${externalNS} "${value}">`
  }
  readonly makeEntity = DTDMaker.makeEntity

  static makeCDATA(value: string) {
    return `<![CDATA[${value}]]`
  }
  readonly makeCDATA = DTDMaker.makeCDATA

}


/** An AS2-Standard-Like XMLDocument
 * 
 * The XMLDocument class represents the legacy XML object that was present in ActionScript 2.0.
 * It was renamed in ActionScript 3.0 to XMLDocument to avoid name conflicts with the new XML class in ActionScript 3.0.
 * In ActionScript 3.0, it is recommended that you use the new XML class and related classes, which support E4X (ECMAScript for XML).
 * The XMLDocument class, as well as XMLNode and XMLNodeType, are present for backward compatibility. The functionality for loading XML documents can now be found in the URLLoader class. 
 */
class AS2_XMLDocument extends AS2_XMLNode {

  /** 
   * Specifies information about the XML document's DOCTYPE declaration.
   * After the XML text has been parsed into an XMLDocument object, the XMLDocument.docTypeDecl property of the XMLDocument object is set to the text of the XML document's DOCTYPE declaration (for example, <!DOCTYPE greeting SYSTEM "hello.dtd">).
   * This property is set using a string representation of the DOCTYPE declaration, not an XMLNode object.
   *
   * The legacy ActionScript XML parser is not a validating parser. The DOCTYPE declaration is read by the parser and stored in the XMLDocument.docTypeDecl property, but no DTD validation is performed.
   *
   * If no DOCTYPE declaration was encountered during a parse operation, the XMLDocument.docTypeDecl property is set to null. The XML.toString() method outputs the contents of XML.docTypeDecl immediately after the XML declaration stored in XML.xmlDecl, and before any other text in the XML object. If XMLDocument.docTypeDecl is null, no DOCTYPE declaration is output.
   */
  docTypeDecl = null

  /**
   * An Object containing the nodes of the XML that have an id attribute assigned.
   * The names of the properties of the object (each containing a node) match the values of the id attributes.
   *
   * Consider the following XMLDocument object:
   * ```xml
   * <employee id='41'>
   *   <name>John Doe</name>
   *   <address>601 Townsend St.</address>
   * </employee>
   *
   * <employee id='42'>
   *   <name>Jane Q. Public</name>
   * </employee>
   * <department id="IT">
   *   Information Technology
   * </department>
   * ```
   * In this example, the idMap property for this XMLDocument object is an Object with three properties: 41, 42, and IT. Each of these properties is an XMLNode that has the matching id value. For example, the IT property of the idMap object is this node:
   *
   * ```xml
   * <department id="IT">
   *   Information Technology
   * </department>
   * ```
   * 
   * You must use the parseXML() method on the XMLDocument object for the idMap property to be instantiated.
   *
   * If there is more than one XMLNode with the same id value, the matching property of the idNode object is that of the last node parsed. For example:
   *
   * ```as
   * var x1:XML = new XMLDocument("<a id='1'><b id='2' /><c id='1' /></a>");
   * x2 = new XMLDocument();
   * x2.parseXML(x1);
   * trace(x2.idMap['1']);
   *
   * This will output the <c> node:
   * ```xml
   *   <c id='1' />
   * ```
   */
  idMap = new Map<string, AS2_XMLNode>

  /** ignoreWhite:Boolean = false
   *
   * When set to true, text nodes that contain only white space are discarded during the parsing process.
   * Text nodes with leading or trailing white space are unaffected. The default setting is false.
   *
   * You can set the ignoreWhite property for individual XMLDocument objects, as the following code shows:
   * ```as
   * my_xml.ignoreWhite = true;
   * ```
   */
  ignoreWhite = false

  /** xmlDecl:Object = null
   *
   * A string that specifies information about a document's XML declaration.
   * After the XML document is parsed into an XMLDocument object, this property is set to the text of the document's XML declaration.
   * This property is set using a string representation of the XML declaration, not an XMLNode object.
   * If no XML declaration is encountered during a parse operation, the property is set to null.
   * The XMLDocument.toString() method outputs the contents of the XML.xmlDecl property before any other text in the XML object.
   * If the XML.xmlDecl property contains null, no XML declaration is output.
   */
  xmlDecl = null

  /**

  /** public function XMLDocument(source:String = null)
   *
   * Creates a new XMLDocument object.
   * You must use the constructor to create an XMLDocument object before you call any of the methods of the XMLDocument class.
   *
   * Note: Use the createElement() and createTextNode() methods to add elements and text nodes to an XML document tree.
   */
  constructor(source: string | null = null) {
    super(AS2_XMLNodeType.DOCUMENT_NODE as XMLNodeTypes, source)
  }

  /** createElement(name:String):XMLNode
   * 
   * Creates a new XMLNode object with the name specified in the parameter.
   * The new node initially has no parent, no children, and no siblings.
   * The method returns a reference to the newly created XMLNode object that represents the element.
   * This method and the XMLDocument.createTextNode() method are the constructor methods for creating nodes for an XMLDocument object.
   */
  createElement(name: string): AS2_XMLNode {
    return new AS2_XMLNode(1).withLocalName(name);
  }

  /** createTextNode(text:String):XMLNode
   *
   * Creates a new XML text node with the specified text.
   * The new node initially has no parent, and text nodes cannot have children or siblings.
   * This method returns a reference to the XMLDocument object that represents the new text node.
   * This method and the XMLDocument.createElement() method are the constructor methods for creating nodes for an XMLDocument object.
   */
  createTextNode(text: string): AS2_XMLNode {
    return new AS2_XMLNode(3, text);
  }

  /** parseXML(source:String):void
   *
   * Parses the XML text specified in the value parameter and populates the specified XMLDocument object with the resulting XML tree.
   * Any existing trees in the XMLDocument object are discarded.
   */
  parseXML(source: string, version = 1.0, enc = 'UTF-8', standalone = 'no', entrytag = 'data', dtd?: string, nativeParser = true): void {

    // @TODO: Implement native Parser
    nativeParser ||= false

    let args = [version, enc, standalone, entrytag, dtd]

    if (nativeParser)
      this.#parseXMLNative(source, ...args)

    if (runtime == 'node') this.#parseJSNode(source, ...args)
    else this.#parseJSWeb(source, ...args)
  }

  #parseJSNode(source: string, ...args: any[]) {
    // Current RT:  npm i fast-xml-parser

    // @ts-ignore
    try { require }
    catch (e) { throw new Error(e + 'Require is not defined!') }

    // @ts-ignore
    const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')

    const parser = new XMLParser();
    parser.parse(source);
  }

  #parseJSWeb(source: string, ...args: any[]) {
    let decl = this.#makeDecl(...args)
    let dom = new DOMParser()
    let doc = dom.parseFromString(decl + source, 'text/xml')
  }

  #makeDecl(version = 1.0, enc = 'UTF-8', standalone = 'no', entrytag = 'data', DTD?: string) {
    return `<?xml version="${version}" encoding="${enc}" standalone="${standalone}"?>`
      + `\n<!DOCTYPE ${entrytag} ${DTD}>`
  }

  #parseXMLNative(source: string, ...args: any[]) {

  }

  /** toString():String
   *
   * Returns a string representation of the XML object.
   */
  toString(): string {
    return '@ TODO'
  }
}

export class AS3_XML {
  // readonly #isProxy: boolean = true;
  // readonly #localName: Object;
  // readonly #parent: Object;
  // readonly #children: AS3_XMLList;
  // readonly #attributes: AS3_XMLList;
  // readonly #nodeKind: string;
  // readonly #cdata: boolean;

  // readonly #string: string;
  // readonly #stringInvalidated: boolean;

  // readonly #xmlString: string;
  // readonly #xmlStringInvalidated: boolean;

  // readonly #xmlNode: AS2_XMLNode;

  constructor(...any: any[]) { } // @TODO: Implement
  length(): any { }
}

export class AS3_XMLList {
  constructor(...any: any[]) { } // @TODO: Implement
  length(): any { }
}