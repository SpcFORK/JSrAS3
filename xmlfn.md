Package	Top Level
Class	public final dynamic class XML
Inheritance	XML Inheritance Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9, Flash Lite 4
The XML class contains methods and properties for working with XML objects. The XML class (along with the XMLList, Namespace, and QName classes) implements the powerful XML-handling standards defined in ECMAScript for XML (E4X) specification (ECMA-357 edition 2).
Use the toXMLString() method to return a string representation of the XML object regardless of whether the XML object has simple content or complex content.

Note: The XML class (along with related classes) from ActionScript 2.0 has been renamed XMLDocument and moved into the flash.xml package. It is included in ActionScript 3.0 for backward compatibility.

View the examples

More examples

Initializing XML variables
Assembling and transforming XML objects
Traversing XML structures
Using XML namespaces
XML type conversion
Converting XML and XMLList objects to strings
Reading external XML documents
XML in ActionScript example: Loading RSS data from the Internet
Learn more

Hierarchical data objects
Working with XML
Basics of XML
The E4X approach to XML processing
XML objects
ECMAScript for XML (E4X) specification (ECMA-357 edition 2)
Related API Elements

Namespace
QName
XMLList
XML.toXMLString()

Public Properties
 Show Inherited Public Properties
  Property	Defined By
    ignoreComments : Boolean
[static] Determines whether XML comments are ignored when XML objects parse the source XML data.
XML
    ignoreProcessingInstructions : Boolean
[static] Determines whether XML processing instructions are ignored when XML objects parse the source XML data.
XML
    ignoreWhitespace : Boolean
[static] Determines whether white space characters at the beginning and end of text nodes are ignored during parsing.
XML
    prettyIndent : int
[static] Determines the amount of indentation applied by the toString() and toXMLString() methods when the XML.prettyPrinting property is set to true.
XML
    prettyPrinting : Boolean
[static] Determines whether the toString() and toXMLString() methods normalize white space characters between some tags.
XML
Public Methods
 Show Inherited Public Methods
  Method	Defined By

XML(value:Object)
Creates a new XML object.
XML

addNamespace(ns:Object):XML
Adds a namespace to the set of in-scope namespaces for the XML object.
XML

appendChild(child:Object):XML
Appends the given child to the end of the XML object's properties.
XML

attribute(attributeName:*):XMLList
Returns the XML value of the attribute that has the name matching the attributeName parameter.
XML

attributes():XMLList
Returns a list of attribute values for the given XML object.
XML

child(propertyName:Object):XMLList
Lists the children of an XML object.
XML

childIndex():int
Identifies the zero-indexed position of this XML object within the context of its parent.
XML

children():XMLList
Lists the children of the XML object in the sequence in which they appear.
XML

comments():XMLList
Lists the properties of the XML object that contain XML comments.
XML

contains(value:XML):Boolean
Compares the XML object against the given value parameter.
XML

copy():XML
Returns a copy of the given XML object.
XML

defaultSettings():Object
[static] Returns an object with the following properties set to the default values: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting.
XML

descendants(name:Object = *):XMLList
Returns all descendants (children, grandchildren, great-grandchildren, and so on) of the XML object that have the given name parameter.
XML

elements(name:Object = *):XMLList
Lists the elements of an XML object.
XML

hasComplexContent():Boolean
Checks to see whether the XML object contains complex content.
XML

hasOwnProperty(p:String):Boolean
Checks to see whether the object has the property specified by the p parameter.
XML

hasSimpleContent():Boolean
Checks to see whether the XML object contains simple content.
XML

inScopeNamespaces():Array
Lists the namespaces for the XML object, based on the object's parent.
XML

insertChildAfter(child1:Object, child2:Object):*
Inserts the given child2 parameter after the child1 parameter in this XML object and returns the resulting object.
XML

insertChildBefore(child1:Object, child2:Object):*
Inserts the given child2 parameter before the child1 parameter in this XML object and returns the resulting object.
XML

length():int
For XML objects, this method always returns the integer 1.
XML

localName():Object
Gives the local name portion of the qualified name of the XML object.
XML

name():Object
Gives the qualified name for the XML object.
XML

namespace(prefix:String = null):*
If no parameter is provided, gives the namespace associated with the qualified name of this XML object.
XML

namespaceDeclarations():Array
Lists namespace declarations associated with the XML object in the context of its parent.
XML

nodeKind():String
Specifies the type of node: text, comment, processing-instruction, attribute, or element.
XML

normalize():XML
For the XML object and all descendant XML objects, merges adjacent text nodes and eliminates empty text nodes.
XML

parent():*
Returns the parent of the XML object.
XML

prependChild(value:Object):XML
Inserts a copy of the provided child object into the XML element before any existing XML properties for that element.
XML

processingInstructions(name:String = "*"):XMLList
If a name parameter is provided, lists all the children of the XML object that contain processing instructions with that name.
XML

propertyIsEnumerable(p:String):Boolean
Checks whether the property p is in the set of properties that can be iterated in a for..in statement applied to the XML object.
XML

removeNamespace(ns:Namespace):XML
Removes the given namespace for this object and all descendants.
XML

replace(propertyName:Object, value:XML):XML
Replaces the properties specified by the propertyName parameter with the given value parameter.
XML

setChildren(value:Object):XML
Replaces the child properties of the XML object with the specified set of XML properties, provided in the value parameter.
XML

setLocalName(name:String):void
Changes the local name of the XML object to the given name parameter.
XML

setName(name:String):void
Sets the name of the XML object to the given qualified name or attribute name.
XML

setNamespace(ns:Namespace):void
Sets the namespace associated with the XML object.
XML

setSettings(... rest):void
[static] Sets values for the following XML properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting.
XML

settings():Object
[static] Retrieves the following properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting.
XML

text():XMLList
Returns an XMLList object of all XML properties of the XML object that represent XML text nodes.
XML

toJSON(k:String):*
Provides an overridable method for customizing the JSON encoding of values in an XML object.
XML

toString():String
Returns a string representation of the XML object.
XML

toXMLString():String
Returns a string representation of the XML object.
XML

valueOf():XML
Returns the XML object.
XML
Property Detail
ignoreComments	property
ignoreComments:Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Determines whether XML comments are ignored when XML objects parse the source XML data. By default, the comments are ignored (true). To include XML comments, set this property to false. The ignoreComments property is used only during the XML parsing, not during the call to any method such as myXMLObject.child(*).toXMLString(). If the source XML includes comment nodes, they are kept or discarded during the XML parsing.



Implementation
    public static function get ignoreComments():Boolean
    public static function set ignoreComments(value:Boolean):void
Related API Elements

XML.child()
XML.toXMLString()

Example  ( How to use this example )
This example shows the effect of setting XML.ignoreComments to false and to true:
XML.ignoreComments = false;
var xml1:XML = 
        <foo>
            <!-- comment -->
        </foo>;
trace(xml1.toXMLString()); // <foo><!-- comment --></foo>

XML.ignoreComments = true;
var xml2:XML = 
        <foo>
            <!-- example -->
        </foo>;
trace(xml2.toXMLString()); // <foo/>
ignoreProcessingInstructions	property	 
ignoreProcessingInstructions:Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Determines whether XML processing instructions are ignored when XML objects parse the source XML data. By default, the processing instructions are ignored (true). To include XML processing instructions, set this property to false. The ignoreProcessingInstructions property is used only during the XML parsing, not during the call to any method such as myXMLObject.child(*).toXMLString(). If the source XML includes processing instructions nodes, they are kept or discarded during the XML parsing.



Implementation
    public static function get ignoreProcessingInstructions():Boolean
    public static function set ignoreProcessingInstructions(value:Boolean):void
Related API Elements

XML.child()
XML.toXMLString()

Example  ( How to use this example )
This example shows the effect of setting XML.ignoreProcessingInstructions to false and to true:
XML.ignoreProcessingInstructions = false;
var xml1:XML = 
        <foo>
            <?exampleInstruction ?>
        </foo>;
trace(xml1.toXMLString()); // <foo><?exampleInstruction ?></foo>

XML.ignoreProcessingInstructions = true;
var xml2:XML = 
        <foo>
            <?exampleInstruction ?>
        </foo>;
trace(xml2.toXMLString()); // <foo/>
ignoreWhitespace	property	 
ignoreWhitespace:Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Determines whether white space characters at the beginning and end of text nodes are ignored during parsing. By default, white space is ignored (true). If a text node is 100% white space and the ignoreWhitespace property is set to true, then the node is not created. To show white space in a text node, set the ignoreWhitespace property to false.

When you create an XML object, it caches the current value of the ignoreWhitespace property. Changing the ignoreWhitespace does not change the behavior of existing XML objects.



Implementation
    public static function get ignoreWhitespace():Boolean
    public static function set ignoreWhitespace(value:Boolean):void

Example  ( How to use this example )
This example shows the effect of setting XML.ignoreWhitespace to false and to true:
XML.ignoreWhitespace = false;
var xml1:XML = <foo>    </foo>;
trace(xml1.children().length()); // 1

XML.ignoreWhitespace = true;
var xml2:XML = <foo>    </foo>;
trace(xml2.children().length()); // 0
prettyIndent	property	 
prettyIndent:int
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Determines the amount of indentation applied by the toString() and toXMLString() methods when the XML.prettyPrinting property is set to true. Indentation is applied with the space character, not the tab character. The default value is 2.



Implementation
    public static function get prettyIndent():int
    public static function set prettyIndent(value:int):void
Related API Elements

prettyPrinting
toString()
toXMLString()

Example  ( How to use this example )
This example shows the effect of setting the XML.prettyIndent static property:
var xml:XML = <foo><bar/></foo>;
XML.prettyIndent = 0;
trace(xml.toXMLString());

XML.prettyIndent = 1;
trace(xml.toXMLString());

XML.prettyIndent = 2;
trace(xml.toXMLString());
prettyPrinting	property	 
prettyPrinting:Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Determines whether the toString() and toXMLString() methods normalize white space characters between some tags. The default value is true.



Implementation
    public static function get prettyPrinting():Boolean
    public static function set prettyPrinting(value:Boolean):void
Related API Elements

prettyIndent
toString()
toXMLString()

Example  ( How to use this example )
This example shows the effect of setting XML.prettyPrinting static property:
var xml:XML = <foo><bar/></foo>;
XML.prettyPrinting = false;
trace(xml.toXMLString());

XML.prettyPrinting = true;
trace(xml.toXMLString());
Constructor Detail
XML	()	Constructor
public function XML(value:Object)
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Creates a new XML object. You must use the constructor to create an XML object before you call any of the methods of the XML class.

Use the toXMLString() method to return a string representation of the XML object regardless of whether the XML object has simple content or complex content.

Parameters
value:Object — Any object that can be converted to XML with the top-level XML() function.
Learn more

XML objects
Related API Elements

XML() global function
XML.toXMLString()

Example  ( How to use this example )

The following example shows how you can load a remote XML document in ActionScript 3.0 using the URLLoader class in Flash Professional. Example provided by ActionScriptExamples.com.
//
// Requires:
//   - TextArea control UI component in the Flash Professional Library.
//
import fl.controls.TextArea;

var xml:XML;

var urlRequest:URLRequest = new URLRequest("http://www.helpexamples.com/flash/xml/menu.xml");

var urlLoader:URLLoader = new URLLoader();
urlLoader.addEventListener(Event.COMPLETE, urlLoader_complete);
urlLoader.load(urlRequest);

var textArea:TextArea = new TextArea();
textArea.move(5, 5);
textArea.setSize(stage.stageWidth - 10, stage.stageHeight - 10);
addChild(textArea);

function urlLoader_complete(evt:Event):void {
    xml = new XML(evt.currentTarget.data);
    textArea.text = xml.toXMLString();
}

Here's another variation using all ActionScript. Example provided by ActionScriptExamples.com.
var xml:XML;
var textArea:TextField = new TextField();
textArea.width = 300;

var urlRequest:URLRequest = new URLRequest("http://www.helpexamples.com/flash/xml/menu.xml");
var urlLoader:URLLoader = new URLLoader();
urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
urlLoader.addEventListener(Event.COMPLETE, urlLoader_complete);
urlLoader.load(urlRequest);

function urlLoader_complete(evt:Event):void {
    xml = new XML(evt.target.data);
    textArea.text = xml.toXMLString();
    addChild(textArea);
}
Method Detail
addNamespace	()	method
AS3 function addNamespace(ns:Object):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Adds a namespace to the set of in-scope namespaces for the XML object. If the namespace already exists in the in-scope namespaces for the XML object (with a prefix matching that of the given parameter), then the prefix of the existing namespace is set to undefined. If the input parameter is a Namespace object, it's used directly. If it's a QName object, the input parameter's URI is used to create a new namespace; otherwise, it's converted to a String and a namespace is created from the String.

Parameters

ns:Object — The namespace to add to the XML object.
Returns
XML — The new XML object, with the namespace added.
Learn more

XML objects

Example  ( How to use this example )

This example uses a namespace defined in one XML object and applies it to another XML object:
var xml1:XML = <ns:foo xmlns:ns="www.example.com/ns" />;
var nsNamespace:Namespace = xml1.namespace();

var xml2:XML = <bar />;
xml2.addNamespace(nsNamespace);
trace(xml2.toXMLString()); // <bar xmlns:ns="www.example.com/ns"/>
appendChild	()	method	 
AS3 function appendChild(child:Object):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Appends the given child to the end of the XML object's properties. The appendChild() method takes an XML object, an XMLList object, or any other data type that is then converted to a String.

Use the delete (XML) operator to remove XML nodes.

Parameters

child:Object — The XML object to append.
Returns
XML — The resulting XML object.
More examples

Assembling and transforming XML objects
Learn more

The E4X approach to XML processing
XML objects
Related API Elements

delete (XML) operator

Example  ( How to use this example )

This example appends a new element to the end of the child list of an XML object:
var xml:XML = 
        <body>
            <p>hello</p>
        </body>;

xml.appendChild(<p>world</p>);    
trace(xml.p[0].toXMLString()); // <p>hello</p>
trace(xml.p[1].toXMLString()); // <p>world</p>
attribute	()	method	 
AS3 function attribute(attributeName:*):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the XML value of the attribute that has the name matching the attributeName parameter. Attributes are found within XML elements. In the following example, the element has an attribute named "gender" with the value "boy": <first gender="boy">John</first>.

The attributeName parameter can be any data type; however, String is the most common data type to use. When passing any object other than a QName object, the attributeName parameter uses the toString() method to convert the parameter to a string.

If you need a qualified name reference, you can pass in a QName object. A QName object defines a namespace and the local name, which you can use to define the qualified name of an attribute. Therefore calling attribute(qname) is not the same as calling attribute(qname.toString()).

Parameters

attributeName:* — The name of the attribute.
Returns
XMLList — An XMLList object or an empty XMLList object. Returns an empty XMLList object when an attribute value has not been defined.
More examples

Traversing XML structures
Learn more

XML objects
Related API Elements

XML.attributes()
QName
Namespace
XML.elements()
attribute identifier (@) operator

Example  ( How to use this example )

This example shows a QName object passed into the attribute() method. The localName property is attr and the namespace property is ns.
 var xml:XML = <ns:node xmlns:ns = "http://uri" ns:attr = '7' />       
 var qn:QName = new QName("http://uri", "attr");
 trace (xml.attribute(qn)); // 7

To return an attribute with a name that matches an ActionScript reserved word, use the attribute() method instead of the attribute identifier (@) operator, as in the following example:
 var xml:XML = <example class="first" />
 trace(xml.attribute("class"));

attributes	()	method	 
AS3 function attributes():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a list of attribute values for the given XML object. Use the name() method with the attributes() method to return the name of an attribute. Use of xml.attributes() is equivalent to xml.@*.

Returns
XMLList — The list of attribute values.
More examples

Traversing XML structures
Learn more

XML objects
Related API Elements

XML.attribute()
XML.name()
@ operator

Example  ( How to use this example )

The following example returns the name of the attribute:
var xml:XML=<example id='123' color='blue'/>
trace(xml.attributes()[1].name()); //color

This example returns the names of all the attributes:

var xml:XML = <example id='123' color='blue'/>
var attNamesList:XMLList = xml.@*;

trace (attNamesList is XMLList); // true
trace (attNamesList.length()); // 2

for (var i:int = 0; i < attNamesList.length(); i++)
{ 
    trace (typeof (attNamesList[i])); // xml
    trace (attNamesList[i].nodeKind()); // attribute
    trace (attNamesList[i].name()); // id and color
} 
child	()	method	 
AS3 function child(propertyName:Object):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists the children of an XML object. An XML child is an XML element, text node, comment, or processing instruction.

Use the propertyName parameter to list the contents of a specific XML child. For example, to return the contents of a child named <first>, call child("first") on the XML object. You can generate the same result by using the child's index number. The index number identifies the child's position in the list of other XML children. For example, child(0) returns the first child in a list.

Use an asterisk (*) to output all the children in an XML document. For example, doc.child("*").

Use the length() method with the asterisk (*) parameter of the child() method to output the total number of children. For example, numChildren = doc.child("*").length().

Parameters

propertyName:Object — The element name or integer of the XML child.
Returns
XMLList — An XMLList object of child nodes that match the input parameter.
More examples

Traversing XML structures
Learn more

XML objects
Related API Elements

XML.elements()
XMLList class
XML.length()

Example  ( How to use this example )

This example shows the use of the child() method to identify child elements with a specified name:
var xml:XML = 
        <foo>
            <bar>text1</bar>
            <bar>text2</bar>
        </foo>;
trace(xml.child("bar").length());  // 2
trace(xml.child("bar")[0].toXMLString()); // <bar>text1</bar>
trace(xml.child("bar")[1].toXMLString()); // <bar>text2</bar>
childIndex	()	method	 
AS3 function childIndex():int
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Identifies the zero-indexed position of this XML object within the context of its parent.

Returns
int — The position of the object. Returns -1 as well as positive integers.
Learn more

XML objects

Example  ( How to use this example )

This example shows the use of the childIndex() method:
var xml:XML = 
            <foo>
                <bar />
                text
                <bob />
            </foo>;
trace(xml.bar.childIndex()); // 0
trace(xml.bob.childIndex()); // 2
children	()	method	 
AS3 function children():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists the children of the XML object in the sequence in which they appear. An XML child is an XML element, text node, comment, or processing instruction.

Returns
XMLList — An XMLList object of the XML object's children.
Learn more

XML objects

Example  ( How to use this example )

This example shows the use of the children() method:
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;
var xml:XML = 
        <foo id="22">
            <bar>44</bar>
            text
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml.children().length()); // 4
trace(xml.children()[0].toXMLString()); // <bar>44</bar>
trace(xml.children()[1].toXMLString()); // text
trace(xml.children()[2].toXMLString()); // <!-- comment -->
trace(xml.children()[3].toXMLString()); // <?instruction ?>
comments	()	method	 
AS3 function comments():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists the properties of the XML object that contain XML comments.

Returns
XMLList — An XMLList object of the properties that contain comments.
Learn more

XML objects

Example  ( How to use this example )

This example shows the use of the comments() method:
XML.ignoreComments = false;
var xml:XML = 
        <foo>
            <!-- example -->
            <!-- example2 -->
        </foo>;
trace(xml.comments().length()); // 2
trace(xml.comments()[1].toXMLString()); // <!-- example2 -->
contains	()	method	 
AS3 function contains(value:XML):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Compares the XML object against the given value parameter.

Parameters

value:XML — A value to compare against the current XML object.
Returns
Boolean — If the XML object matches the value parameter, then true; otherwise false.
Learn more

XML objects

Example  ( How to use this example )

This example shows the use of the contains() method:
var xml:XML = 
        <order>
            <item>Rice</item>
            <item>Kung Pao Shrimp</item>
        </order>;
trace(xml.item[0].contains(<item>Rice</item>)); // true
trace(xml.item[1].contains(<item>Kung Pao Shrimp</item>)); // true
trace(xml.item[1].contains(<item>MSG</item>)); // false
copy	()	method	 
AS3 function copy():XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a copy of the given XML object. The copy is a duplicate of the entire tree of nodes. The copied XML object has no parent and returns null if you attempt to call the parent() method.

Returns
XML — The copy of the object.
Learn more

XML objects

Example  ( How to use this example )

This example shows that the copy() method creates a new instance of an XML object. When you modify the copy, the original remains unchanged:
var xml1:XML = <foo />;
var xml2:XML = xml1.copy();
xml2.appendChild(<bar />);
trace(xml1.bar.length()); // 0
trace(xml2.bar.length()); // 1
defaultSettings	()	method	 
AS3 static function defaultSettings():Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns an object with the following properties set to the default values: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting. The default values are as follows:

ignoreComments = true
ignoreProcessingInstructions = true
ignoreWhitespace = true
prettyIndent = 2
prettyPrinting = true
Note: You do not apply this method to an instance of the XML class; you apply it to XML, as in the following code: var df:Object = XML.defaultSettings().

Returns
Object — An object with properties set to the default settings.
Learn more

XML objects
Related API Elements

XML.ignoreComments
XML.ignoreProcessingInstructions
XML.ignoreWhitespace
XML.prettyIndent
XML.prettyPrinting
XML.setSettings()
XML.settings()

Example  ( How to use this example )

The following example shows: how to apply some custom settings (for including comments and processing instructions) prior to setting an XML object; how to then revert back to the default settings before setting another XML object; and then how to set the custom settings again (for setting any more XML objects):
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;
var customSettings:Object = XML.settings();

var xml1:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml1.toXMLString());
//    <foo>
//        <!-- comment -->
//         <?instruction ?>
//    </foo>

XML.setSettings(XML.defaultSettings());
var xml2:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml2.toXMLString());
descendants	()	method	 
AS3 function descendants(name:Object = *):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns all descendants (children, grandchildren, great-grandchildren, and so on) of the XML object that have the given name parameter. The name parameter is optional. The name parameter can be a QName object, a String data type or any other data type that is then converted to a String data type.

To return all descendants, use the "*" parameter. If no parameter is passed, the string "*" is passed and returns all descendants of the XML object.

Parameters

name:Object (default = *) — The name of the element to match.
Returns
XMLList — An XMLList object of matching descendants. If there are no descendants, returns an empty XMLList object.
Related API Elements

descendant accessor (..) operator

Example  ( How to use this example )

To return descendants with names that match ActionScript reserved words, use the descendants() method instead of the descendant (..) operator, as in the following example:
var xml:XML = 
  <enrollees>
    <student id="239">
        <class name="Algebra" />
        <class name="Spanish 2"/>
    </student>
    <student id="206">
        <class name="Trigonometry" />
        <class name="Spanish 2" />
    </student>
  </enrollees>
trace(xml.descendants("class")); 

The following example shows that the descendants() method returns an XMLList object that contains all descendant objects, including children, grandchildren, and so on:
XML.ignoreComments = false;
var xml:XML = 
        <body>
            <!-- comment -->
            text1
            <a>
                <b>text2</b>
            </a>
        </body>;
trace(xml.descendants("*").length()); // 5
trace(xml.descendants("*")[0]); // // <!-- comment -->
trace(xml.descendants("*")[1].toXMLString()); // text1
trace(xml.descendants("a").toXMLString()); // <a><b>text2</b></a>
trace(xml.descendants("b").toXMLString()); // <b>text2</b>
elements	()	method	 
AS3 function elements(name:Object = *):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists the elements of an XML object. An element consists of a start and an end tag; for example <first></first>. The name parameter is optional. The name parameter can be a QName object, a String data type, or any other data type that is then converted to a String data type. Use the name parameter to list a specific element. For example, the element "first" returns "John" in this example: <first>John</first>.

To list all elements, use the asterisk (*) as the parameter. The asterisk is also the default parameter.

Use the length() method with the asterisk parameter to output the total number of elements. For example, numElement = addressbook.elements("*").length().

Parameters

name:Object (default = *) — The name of the element. An element's name is surrounded by angle brackets. For example, "first" is the name in this example: <first></first>.
Returns
XMLList — An XMLList object of the element's content. The element's content falls between the start and end tags. If you use the asterisk (*) to call all elements, both the element's tags and content are returned.
Learn more

XML objects
Related API Elements

XML.child()
XMLList class
XML.length()
XML.attribute()
XML dot (.) operator

Example  ( How to use this example )

The following example shows that the elements() method returns a list of elements only — not comments, text properties, or processing instructions:
var xml:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
            text
            <a>1</a>
            <b>2</b>
        </foo>;
trace(xml.elements("*").length()); // 2
trace(xml.elements("*")[0].toXMLString()); // <a>1</a>
trace(xml.elements("b").length()); // 1
trace(xml.elements("b")[0].toXMLString()); // <b>2</b>

To return elements with names that match ActionScript reserved words, use the elements() method instead of the XML dot (.) operator, as in the following example:
var xml:XML =
 <student id="206">
    <class name="Trigonometry" />
    <class name="Spanish 2" />
 </student>
trace(xml.elements("class")); 
hasComplexContent	()	method	 
AS3 function hasComplexContent():Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks to see whether the XML object contains complex content. An XML object contains complex content if it has child elements. XML objects that representing attributes, comments, processing instructions, and text nodes do not have complex content. However, an object that contains these can still be considered to contain complex content (if the object has child elements).

Returns
Boolean — If the XML object contains complex content, true; otherwise false.
Learn more

XML objects
Related API Elements

XML.hasSimpleContent()

Example  ( How to use this example )

The following example shows an XML object with one property named a that has simple content and one property named a that has complex content:
var xml:XML = 
        <foo>
            <a>
                text
            </a>
            <a>
                <b/>
            </a>
        </foo>;
trace(xml.a[0].hasComplexContent()); // false
trace(xml.a[1].hasComplexContent()); // true

trace(xml.a[0].hasSimpleContent()); // true
trace(xml.a[1].hasSimpleContent()); // false
hasOwnProperty	()	method	 
AS3 function hasOwnProperty(p:String):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks to see whether the object has the property specified by the p parameter.

Parameters

p:String — The property to match.
Returns
Boolean — If the property exists, true; otherwise false.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the hasOwnProperty() method to ensure that a property (b) exists prior to evaluating an expression (b == "11") that uses the property:
var xml:XML = 
        <foo>
            <a />
            <a>
                <b>10</b>
            </a>
            <a>
                <b>11</b>
            </a>
        </foo>;
trace(xml.a.(hasOwnProperty("b") && b == "11")); 
If the last line in this example were the following, Flash Player would throw an exception since the first element named a does not have a property named b:
trace(xml.a.(b == "11"));

The following example uses the hasOwnProperty() method to ensure that a property (item) exists prior to evaluating an expression (item.contains("toothbrush")) that uses the property:
var xml:XML = 
        <orders>
            <order id='1'>
                <item>toothbrush</item>
                <item>toothpaste</item>
            </order>
            <order>
                <returnItem>shoe polish</returnItem>
            </order>
        </orders>;
trace(xml.order.(hasOwnProperty("item") && item.contains("toothbrush"))); 
hasSimpleContent	()	method	 
AS3 function hasSimpleContent():Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks to see whether the XML object contains simple content. An XML object contains simple content if it represents a text node, an attribute node, or an XML element that has no child elements. XML objects that represent comments and processing instructions do not contain simple content.

Returns
Boolean — If the XML object contains simple content, true; otherwise false.
Learn more

XML objects
Related API Elements

XML.hasComplexContent()

Example  ( How to use this example )

The following example shows an XML object with one property named a that has simple content and one property named a that has complex content:
var xml:XML = 
        <foo>
            <a>
                text
            </a>
            <a>
                <b/>
            </a>
        </foo>;
trace(xml.a[0].hasComplexContent()); // false
trace(xml.a[1].hasComplexContent()); // true

trace(xml.a[0].hasSimpleContent()); // true
trace(xml.a[1].hasSimpleContent()); // false
inScopeNamespaces	()	method	 
AS3 function inScopeNamespaces():Array
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists the namespaces for the XML object, based on the object's parent.

Returns
Array — An array of Namespace objects.
Learn more

XML objects
insertChildAfter	()	method	 
AS3 function insertChildAfter(child1:Object, child2:Object):*
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Inserts the given child2 parameter after the child1 parameter in this XML object and returns the resulting object. If the child1 parameter is null, the method inserts the contents of child2 before all children of the XML object (in other words, after none). If child1 is provided, but it does not exist in the XML object, the XML object is not modified and undefined is returned.

If you call this method on an XML child that is not an element (text, attributes, comments, pi, and so on) undefined is returned.

Use the delete (XML) operator to remove XML nodes.

Parameters

child1:Object — The object in the source object that you insert before child2.

child2:Object — The object to insert.
Returns
* — The resulting XML object or undefined.
More examples

Assembling and transforming XML objects
Learn more

XML objects
Related API Elements

XML.insertChildBefore()
delete (XML) operator

Example  ( How to use this example )

The following example appends an element to the end of the child elements of an XML object:
var xml:XML = 
        <menu>
            <item>burger</item>
            <item>soda</item>
        </menu>;
xml.insertChildAfter(xml.item[0], <saleItem>fries</saleItem>);
trace(xml);
The trace() output is the following:
 <menu>
     <item>burger</item>
     <saleItem>fries</saleItem>
     <item>soda</item>
 </menu>
insertChildBefore	()	method	 
AS3 function insertChildBefore(child1:Object, child2:Object):*
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Inserts the given child2 parameter before the child1 parameter in this XML object and returns the resulting object. If the child1 parameter is null, the method inserts the contents of child2 after all children of the XML object (in other words, before none). If child1 is provided, but it does not exist in the XML object, the XML object is not modified and undefined is returned.

If you call this method on an XML child that is not an element (text, attributes, comments, pi, and so on) undefined is returned.

Use the delete (XML) operator to remove XML nodes.

Parameters

child1:Object — The object in the source object that you insert after child2.

child2:Object — The object to insert.
Returns
* — The resulting XML object or undefined.
More examples

Assembling and transforming XML objects
Learn more

XML objects
Related API Elements

XML.insertChildAfter()
delete (XML) operator

Example  ( How to use this example )

The following example appends an element to the end of the child elements of an XML object:
var xml:XML = 
        <menu>
            <item>burger</item>
            <item>soda</item>
        </menu>;
xml.insertChildBefore(xml.item[0], <saleItem>fries</saleItem>);
trace(xml);
The trace() output is the following:
 <menu>
     <saleItem>fries</saleItem>
     <item>burger</item>
     <item>soda</item>
 </menu>
length	()	method	 
AS3 function length():int
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
For XML objects, this method always returns the integer 1. The length() method of the XMLList class returns a value of 1 for an XMLList object that contains only one value.

Returns
int — Always returns 1 for any XML object.
Learn more

XML objects
localName	()	method	 
AS3 function localName():Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Gives the local name portion of the qualified name of the XML object.

Returns
Object — The local name as either a String or null.
Learn more

XML objects

Example  ( How to use this example )

The following example illustrates the use of the localName() method:
var xml:XML = 
        <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
            soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

                        <soap:Body xmlns:wx = "http://example.com/weather">
                <wx:forecast>
                    <wx:city>Quito</wx:city>
                </wx:forecast>
            </soap:Body>
        </soap:Envelope>;

trace(xml.localName()); // Envelope
name	()	method	 
AS3 function name():Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Gives the qualified name for the XML object.

Returns
Object — The qualified name is either a QName or null.
Learn more

XML objects
Related API Elements

XML.attributes()
attribute identifier

Example  ( How to use this example )

The following example illustrates the use of the name() method to get the qualified name of an XML object:
var xml:XML = 
        <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
            soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

                        <soap:Body xmlns:wx = "http://example.com/weather">
                <wx:forecast>
                    <wx:city>Quito</wx:city>
                </wx:forecast>
            </soap:Body>
        </soap:Envelope>;

trace(xml.name().localName); // Envelope
trace(xml.name().uri); // "http://www.w3.org/2001/12/soap-envelope"

The following example illustrates the use of the name() method called on an XML property, on a text element, and on an attribute:
var xml:XML = 
        <foo x="15" y="22">
            text
        </foo>;

trace(xml.name().localName); // foo
trace(xml.name().uri == ""); // true
trace(xml.children()[0]); // text
trace(xml.children()[0].name()); // null
trace(xml.attributes()[0]); // 15
trace(xml.attributes()[0].name()); // x
namespace	()	method	 
AS3 function namespace(prefix:String = null):*
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
If no parameter is provided, gives the namespace associated with the qualified name of this XML object. If a prefix parameter is specified, the method returns the namespace that matches the prefix parameter and that is in scope for the XML object. If there is no such namespace, the method returns undefined.

Parameters

prefix:String (default = null) — The prefix you want to match.
Returns
* — Returns null, undefined, or a namespace.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the namespace() method to get the namespace of an XML object and assign it to a Namespace object named soap which is then used in identifying a property of the xml object (xml.soap::Body[0]):
var xml:XML = 
        <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
            soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

                        <soap:Body xmlns:wx = "http://example.com/weather">
                <wx:forecast>
                    <wx:city>Quito</wx:city>
                </wx:forecast>
            </soap:Body>
        </soap:Envelope>;

var soap:Namespace = xml.namespace();
trace(soap.prefix); // soap
trace(soap.uri); // http://www.w3.org/2001/12/soap-envelope

var body:XML = xml.soap::Body[0];
trace(body.namespace().prefix); // soap
trace(xml.namespace().uri); // http://www.w3.org/2001/12/soap-envelope
trace(body.namespace("wx").uri); // "http://example.com/weather"

The following example uses the namespace() method to get the default namespace for a node, as well as the namespace for a specific prefix ("dc"):
var xml:XML = 
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
            xmlns:dc="http://purl.org/dc/elements/1.1/" 
            xmlns="http://purl.org/rss/1.0/">
                <!-- ... -->
        </rdf:RDF>;

trace(xml.namespace()); // http://www.w3.org/1999/02/22-rdf-syntax-ns#
trace(xml.namespace("dc")); // http://purl.org/dc/elements/1.1/
trace(xml.namespace("foo")); // undefined
namespaceDeclarations	()	method	 
AS3 function namespaceDeclarations():Array
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Lists namespace declarations associated with the XML object in the context of its parent.

Returns
Array — An array of Namespace objects.
Learn more

XML objects
Related API Elements

XML.namespace()

Example  ( How to use this example )

The following example outputs the namespace declarations of an XML object:
var xml:XML = 
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
            xmlns:dc="http://purl.org/dc/elements/1.1/" 
            xmlns="http://purl.org/rss/1.0/">

            <!-- ... -->

        </rdf:RDF>;

for (var i:uint = 0; i < xml.namespaceDeclarations().length; i++) {
    var ns:Namespace = xml.namespaceDeclarations()[i]; 
    var prefix:String = ns.prefix;
    if (prefix == "") {
        prefix = "(default)";
    }
    trace(prefix + ":" , ns.uri);
}
The trace() output is the following:
rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#
 dc: http://purl.org/dc/elements/1.1/
 (default): http://purl.org/rss/1.0/
nodeKind	()	method	 
AS3 function nodeKind():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Specifies the type of node: text, comment, processing-instruction, attribute, or element.

Returns
String — The node type used.
Learn more

XML objects
Related API Elements

attribute identifier

Example  ( How to use this example )

This example traces all five node types:
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;

var xml:XML = 
    <example id="10">
        <!-- this is a comment -->
        <?test this is a pi ?>
        and some text
    </example>;

trace(xml.nodeKind()); // element
trace(xml.children()[0].nodeKind()); // comment
trace(xml.children()[1].nodeKind()); // processing-instruction
trace(xml.children()[2].nodeKind()); // text
trace(xml.@id[0].nodeKind()); // attribute
normalize	()	method	 
AS3 function normalize():XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
For the XML object and all descendant XML objects, merges adjacent text nodes and eliminates empty text nodes.

Returns
XML — The resulting normalized XML object.
Learn more

XML objects

Example  ( How to use this example )

The following example shows the effect of calling the normalize() method:
var xml:XML = <body></body>;
xml.appendChild("hello");
xml.appendChild(" world");
trace(xml.children().length()); // 2
xml.normalize();
trace(xml.children().length()); // 1
parent	()	method	 
AS3 function parent():*
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the parent of the XML object. If the XML object has no parent, the method returns undefined.

Returns
* — Either an XML reference of the parent node, or undefined if the XML object has no parent.
More examples

Traversing XML structures
Learn more

XML objects

Example  ( How to use this example )

The following example uses the parent() method to identify the parent element of a specific element in an XML structure:
var xml:XML = 
    <body>
        <p id="p1">Hello</p>
        <p id="p2">Test:
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </p>
    </body>;
var node:XML = xml.p.ul.(li.contains("1"))[0]; // == <ul> ... </ul>
trace(node.parent().@id); // p2
prependChild	()	method	 
AS3 function prependChild(value:Object):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Inserts a copy of the provided child object into the XML element before any existing XML properties for that element.

Use the delete (XML) operator to remove XML nodes.

Parameters

value:Object — The object to insert.
Returns
XML — The resulting XML object.
More examples

Assembling and transforming XML objects
Learn more

XML objects
Related API Elements

delete (XML) operator

Example  ( How to use this example )

The following example uses the prependChild() method to add an element to the begining of a child list of an XML object:
var xml:XML = 
        <body>
            <p>hello</p>
        </body>;

xml.prependChild(<p>world</p>);    
trace(xml.p[0].toXMLString()); // <p>world</p>
trace(xml.p[1].toXMLString()); // <p>hello</p>
processingInstructions	()	method	 
AS3 function processingInstructions(name:String = "*"):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
If a name parameter is provided, lists all the children of the XML object that contain processing instructions with that name. With no parameters, the method lists all the children of the XML object that contain any processing instructions.

Parameters

name:String (default = "*") — The name of the processing instructions to match.
Returns
XMLList — A list of matching child objects.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the processingInstructions() method to get an array of processing instructions for an XML object:
XML.ignoreProcessingInstructions = false;
var xml:XML =
    <body>
            foo
            <?xml-stylesheet href="headlines.css" type="text/css" ?>
            <?instructionX ?>

    </body>;

trace(xml.processingInstructions().length()); // 2
trace(xml.processingInstructions()[0].name()); // xml-stylesheet
propertyIsEnumerable	()	method	 
AS3 function propertyIsEnumerable(p:String):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks whether the property p is in the set of properties that can be iterated in a for..in statement applied to the XML object. Returns true only if toString(p) == "0".

Parameters

p:String — The property that you want to check.
Returns
Boolean — If the property can be iterated in a for..in statement, true; otherwise, false.
Learn more

XML objects

Example  ( How to use this example )

The following example shows that, for an XML object, the propertyNameIsEnumerable() method returns a value of true only for the value 0; whereas for an XMLList object, the return value is true for each valid index value for the XMLList object:
var xml:XML = 
        <body>
             <p>Hello</p>
               <p>World</p>
        </body>;

trace(xml.propertyIsEnumerable(0)); // true
trace(xml.propertyIsEnumerable(1)); // false

for (var propertyName:String in xml) {
    trace(xml[propertyName]);
}

var list:XMLList = xml.p;
trace(list.propertyIsEnumerable(0)); // true
trace(list.propertyIsEnumerable(1)); // true
trace(list.propertyIsEnumerable(2)); // false

for (var propertyName:String in list) { 
    trace(list[propertyName]);
}
removeNamespace	()	method	 
AS3 function removeNamespace(ns:Namespace):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Removes the given namespace for this object and all descendants. The removeNamespaces() method does not remove a namespace if it is referenced by the object's qualified name or the qualified name of the object's attributes.

Parameters

ns:Namespace — The namespace to remove.
Returns
XML — A copy of the resulting XML object.
Learn more

XML objects

Example  ( How to use this example )

The following example shows how to remove a namespace declaration from an XML object:
var xml:XML = 
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlns:dc="http://purl.org/dc/elements/1.1/" 
        xmlns="http://purl.org/rss/1.0/">

        <!-- ... -->

    </rdf:RDF>;

trace(xml.namespaceDeclarations().length); // 3
trace(xml.namespaceDeclarations()[0] is String); // 
var dc:Namespace = xml.namespace("dc");
xml.removeNamespace(dc);
trace(xml.namespaceDeclarations().length); // 2
replace	()	method	 
AS3 function replace(propertyName:Object, value:XML):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Replaces the properties specified by the propertyName parameter with the given value parameter. If no properties match propertyName, the XML object is left unmodified.

Parameters

propertyName:Object — Can be a numeric value, an unqualified name for a set of XML elements, a qualified name for a set of XML elements, or the asterisk wildcard ("*"). Use an unqualified name to identify XML elements in the default namespace.

value:XML — The replacement value. This can be an XML object, an XMLList object, or any value that can be converted with toString().
Returns
XML — The resulting XML object, with the matching properties replaced.
Learn more

XML objects

Example  ( How to use this example )

The following example illustrates calling the replace() method with an integer as the first parameter:
var xml:XML = 
    <body>
        <p>Hello</p>
        <p>World</p>
        <hr/>
    </body>;

xml.replace(1, <p>Bob</p>);
trace(xml);
This results in the following trace() output:

 <body>
     <p>Hello</p>
     <p>Bob</p>
     <hr/>
 </body>


The following example calls replace() method with a string as the first parameter:
var xml:XML = 
    <body>
        <p>Hello</p>
        <p>World</p>
        <hr/>
    </body>;

xml.replace("p", <p>Hi</p>); 
trace(xml);
This results in the following trace() output:

 <body>
     <p>Hi</p>
     <hr/>
 </body>;


The following example illustrates calling the replace() method with a QName as the first parameter:
var xml:XML = 
    <ns:body xmlns:ns = "myNS">
        <ns:p>Hello</ns:p>
        <ns:p>World</ns:p>
        <hr/>
    </ns:body>;

var qname:QName = new QName("myNS", "p");
xml.replace(qname, <p>Bob</p>);
trace(xml);

This results in the following trace() output:

 <ns:body xmlns:ns = "myNS">
     <p>Bob</p>
     <hr/>
 </ns:body>


The following example illustrates calling the replace() method with the string "*" as the first parameter:
var xml:XML = 
    <body>
        <p>Hello</p>
        <p>World</p>
        <hr/>
    </body>;

xml.replace("*", <img src = "hello.jpg"/>);
trace(xml);
This results in the following trace() output:

 <body>
     <img src="hello.jpg"/>
 </body>

setChildren	()	method	 
AS3 function setChildren(value:Object):XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Replaces the child properties of the XML object with the specified set of XML properties, provided in the value parameter.

Parameters

value:Object — The replacement XML properties. Can be a single XML object or an XMLList object.
Returns
XML — The resulting XML object.
Learn more

XML objects

Example  ( How to use this example )

The following example illustrates calling the setChildren() method, first using an XML object as the parameter, and then using an XMLList object as the parameter:
var xml:XML = 
    <body>
        <p>Hello</p>
        <p>World</p>
    </body>;

var list:XMLList = xml.p;

xml.setChildren(<p>hello</p>);
trace(xml);

//    <body>
//        <p>hello</p>
//    </body>

xml.setChildren(list);
trace(xml);

//    <body>
//        <p>Hello</p>
//        <p>World</p>
//    </body>
setLocalName	()	method	 
AS3 function setLocalName(name:String):void
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Changes the local name of the XML object to the given name parameter.

Parameters

name:String — The replacement name for the local name.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the setLocalName() method to change the local name of an XML element:
var xml:XML = 
    <ns:item xmlns:ns="http://example.com">
        toothbrush
    </ns:item>;

xml.setLocalName("orderItem");
trace(xml.toXMLString()); // <ns:orderItem xmlns:ns="http://example.com">toothbrush</ns:orderItem>
setName	()	method	 
AS3 function setName(name:String):void
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Sets the name of the XML object to the given qualified name or attribute name.

Parameters

name:String — The new name for the object.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the setName() method to change the name of an XML element:
var xml:XML = 
    <item>
        toothbrush
    </item>;

xml.setName("orderItem");
trace(xml.toXMLString()); // <orderItem>toothbrush</orderItem>
setNamespace	()	method	 
AS3 function setNamespace(ns:Namespace):void
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Sets the namespace associated with the XML object.

Parameters

ns:Namespace — The new namespace.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the soap namespace defined in one XML object and applies it to the namespace of another XML object (xml2):
var xml1:XML = 
        <soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
            soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
            <!-- ... -->
        </soap:Envelope>;
var ns:Namespace = xml1.namespace("soap");

var xml2:XML = 
    <Envelope>
        <Body/>
    </Envelope>;

xml2.setNamespace(ns);

trace(xml2);
setSettings	()	method	 
AS3 static function setSettings(... rest):void
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Sets values for the following XML properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting. The following are the default settings, which are applied if no setObj parameter is provided:

XML.ignoreComments = true
XML.ignoreProcessingInstructions = true
XML.ignoreWhitespace = true
XML.prettyIndent = 2
XML.prettyPrinting = true
Note: You do not apply this method to an instance of the XML class; you apply it to XML, as in the following code: XML.setSettings().

Parameters

... rest — An object with each of the following properties:
ignoreComments
ignoreProcessingInstructions
ignoreWhitespace
prettyIndent
prettyPrinting
Learn more

XML objects
Related API Elements

ignoreComments
ignoreProcessingInstructions
ignoreWhitespace
prettyIndent
prettyPrinting
defaultSettings()
settings()

Example  ( How to use this example )

The following example shows: how to apply some custom settings (for including comments and processing instructions) prior to setting an XML object; how to then revert back to the default settings before setting another XML object; and then how to set the custom settings again (for setting any more XML objects):
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;
var customSettings:Object = XML.settings();

var xml1:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml1.toXMLString());
//    <foo>
//        <!-- comment -->
//         <?instruction ?>
//    </foo>

XML.setSettings(XML.defaultSettings());
var xml2:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml2.toXMLString());
settings	()	method	 
AS3 static function settings():Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Retrieves the following properties: ignoreComments, ignoreProcessingInstructions, ignoreWhitespace, prettyIndent, and prettyPrinting.

Returns
Object — An object with the following XML properties:
ignoreComments
ignoreProcessingInstructions
ignoreWhitespace
prettyIndent
prettyPrinting
Related API Elements

XML.ignoreComments
XML.ignoreProcessingInstructions
XML.ignoreWhitespace
XML.prettyIndent
XML.prettyPrinting
XML.defaultSettings()
XML.setSettings()

Example  ( How to use this example )

The following example shows: how to apply some custom settings (for including comments and processing instructions) prior to setting an XML object; how to then revert back to the default settings before setting another XML object; and then how to set the custom settings again (for setting any more XML objects):
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;
var customSettings:Object = XML.settings();

var xml1:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml1.toXMLString());
//    <foo>
//        <!-- comment -->
//         <?instruction ?>
//    </foo>

XML.setSettings(XML.defaultSettings());
var xml2:XML = 
        <foo>
            <!-- comment -->
            <?instruction ?>
        </foo>;
trace(xml2.toXMLString());
text	()	method	 
AS3 function text():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns an XMLList object of all XML properties of the XML object that represent XML text nodes.

Returns
XMLList — The list of properties.
Learn more

XML objects

Example  ( How to use this example )

The following example uses the text() method to get the text nodes of an XML object:
var xml:XML =
        <body>
            text1
            <hr/>
            text2
        </body>;
trace(xml.text()[0]); // text1
trace(xml.text()[1]); // text2
toJSON	()	method	 
AS3 function toJSON(k:String):*
Language Version: 	ActionScript 3.0
Runtime Versions: 	Flash Player 11, AIR 3, Flash Lite 4
Provides an overridable method for customizing the JSON encoding of values in an XML object.

The JSON.stringify() method looks for a toJSON() method on each object that it traverses. If the toJSON() method is found, JSON.stringify() calls it for each value it encounters, passing in the key that is paired with the value.

XML provides a default implementation of toJSON() that simply returns the name of the class. Clients that wish to export XML objects to JSON must provide their own implementation. You can do this by redefining the toJSON() method on the class prototype.

The toJSON() method can return a value of any type. If it returns an object, stringify() recurses into that object. If toJSON() returns a string, stringify() does not recurse and continues its traversal.

Parameters

k:String — The key of a key/value pair that JSON.stringify() has encountered in its traversal of this object
Returns
* — The class name string.
Learn more

Overview of the JSON API
Related API Elements

Object
Object.prototype
toString	()	method	 
AS3 function toString():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a string representation of the XML object. The rules for this conversion depend on whether the XML object has simple content or complex content:

If the XML object has simple content, toString() returns the String contents of the XML object with the following stripped out: the start tag, attributes, namespace declarations, and end tag.
If the XML object has complex content, toString() returns an XML encoded String representing the entire XML object, including the start tag, attributes, namespace declarations, and end tag.
To return the entire XML object every time, use toXMLString().

Returns
String — The string representation of the XML object.
More examples

XML type conversion
Related API Elements

XML.hasSimpleContent()
XML.hasComplexContent()
XML.toXMLString()

Example  ( How to use this example )

The following example shows what the toString() method returns when the XML object has simple content:
var test:XML = <type name="Joe">example</type>;
trace(test.toString()); //example

The following example shows what the toString() method returns when the XML object has complex content:
var test:XML = 
<type name="Joe">
    <base name="Bob"></base>
    example
</type>;
trace(test.toString());
  // <type name="Joe">
  // <base name="Bob"/>
  // example
  // </type> 
toXMLString	()	method	 
AS3 function toXMLString():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a string representation of the XML object. Unlike the toString() method, the toXMLString() method always returns the start tag, attributes, and end tag of the XML object, regardless of whether the XML object has simple content or complex content. (The toString() method strips out these items for XML objects that contain simple content.)

Returns
String — The string representation of the XML object.
More examples

XML type conversion
Learn more

XML objects
Related API Elements

XML.toString()

Example  ( How to use this example )

The following example shows the difference between using the toString() method (which is applied to all parameters of a trace() method, by default) and using the toXMLString() method:
var xml:XML =
        <p>hello</p>;
trace(xml); // hello
trace(xml.toXMLString()); // <p>hello</p>
valueOf	()	method	 
AS3 function valueOf():XML
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the XML object.

Returns
XML — The primitive value of an XML instance.
Learn more

XML objects

Example  ( How to use this example )

The following example shows that the value returned by the valueOf() method is the same as the source XML object:
var xml:XML = <p>hello</p>;
trace(xml.valueOf() === xml); // true
Examples How to use this example
XMLExample.as

The following example first creates an XML variable and adds nodes to it. Then XML properties are used to find and print XML nodes. Notice that the "at" (@) symbol is used in several of the trace() calls to locate information by attribute name.
package {
    import flash.display.Sprite;

    public class XmlExample extends Sprite {        
        public function XmlExample() {
            var employees:XML =
                <employees>
                    <employee ssn="123-123-1234">
                        <name first="John" last="Doe"/>
                        <address>
                            <street>11 Main St.</street>
                            <city>San Francisco</city>
                            <state>CA</state>
                            <zip>98765</zip>
                        </address>
                    </employee>
                    <employee ssn="789-789-7890">
                        <name first="Mary" last="Roe"/>
                        <address>
                            <street>99 Broad St.</street>
                            <city>Newton</city>
                            <state>MA</state>
                            <zip>01234</zip>
                        </address>
                    </employee>
                </employees>;

            trace(employees.employee[0].address.zip);   // 98765

            trace(employees.employee[1].@ssn);          // 789-789-7890

            trace(employees.employee.name);             // <name first="John" last="Doe"/>
                                                        // <name first="Mary" last="Roe"/>

            trace(employees..zip[0]);                   // 98765

            trace(employees..@ssn[1]);                  // 789-789-7890

            trace(employees..name);                     // <name first="John" last="Doe"/>
                                                        // <name first="Mary" last="Roe"/>

            trace(employees.employee[0].address.*);     // <street>11 Main St.</street>    
                                                        // <city>San Francisco</city>
                                                        // <state>CA</state>
                                                        // <zip>98765</zip>
            var node:String = "zip";
            trace(employees.employee[0].address[node]); // 98765

            var attribute:String = "ssn";
            trace(employees.employee[1].@[attribute]);  // 789-789-7890

            for each (var num:XML in employees..@ssn) {
                trace(num);                             // 123-123-1234
            }                                           // 789-789-7890

            var ssnToFind:String = "789-789-7890";
            trace(employees.employee.(@ssn == ssnToFind).toXMLString());
                                                        // <employee ssn="789-789-7890">
                                                        // <name first="Mary" last="Roe"/>
                                                        // <address>
                                                        // <street>99 Broad St.</street>
                                                        // <city>Newton</city>
                                                        // <state>MA</state>
                                                        // <zip>01234</zip>
                                                        // </address>
                                                        // </employee>
        }
    }
}

Package	Top Level
Class	public final dynamic class XMLList
Inheritance	XMLList Inheritance Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9, Flash Lite 4
The XMLList class contains methods for working with one or more XML elements. An XMLList object can represent one or more XML objects or elements (including multiple nodes or attributes), so you can call methods on the elements as a group or on the individual elements in the collection.
If an XMLList object has only one XML element, you can use the XML class methods on the XMLList object directly. In the following example, example.two is an XMLList object of length 1, so you can call any XML method on it.

 var example2 = <example><two>2</two></example>;
If you attempt to use XML class methods with an XMLList object containing more than one XML object, an exception is thrown; instead, iterate over the XMLList collection (using a for each..in statement, for example) and apply the methods to each XML object in the collection.

View the examples

More examples

Initializing XML variables
Assembling and transforming XML objects
Traversing XML structures
Using XML namespaces
XML type conversion
Converting XML and XMLList objects to strings
Reading external XML documents
XML in ActionScript example: Loading RSS data from the Internet
Learn more

Hierarchical data objects
Working with XML
Basics of XML
The E4X approach to XML processing
XML objects
XMLList objects
Related API Elements

XML
for each..in
Namespace
QName

Public Properties
 Show Inherited Public Properties
Public Methods
 Show Inherited Public Methods
  Method	Defined By

XMLList(value:Object)
Creates a new XMLList object.
XMLList

attribute(attributeName:*):XMLList
Calls the attribute() method of each XML object and returns an XMLList object of the results.
XMLList

attributes():XMLList
Calls the attributes() method of each XML object and returns an XMLList object of attributes for each XML object.
XMLList

child(propertyName:Object):XMLList
Calls the child() method of each XML object and returns an XMLList object that contains the results in order.
XMLList

children():XMLList
Calls the children() method of each XML object and returns an XMLList object that contains the results.
XMLList

comments():XMLList
Calls the comments() method of each XML object and returns an XMLList of comments.
XMLList

contains(value:XML):Boolean
Checks whether the XMLList object contains an XML object that is equal to the given value parameter.
XMLList

copy():XMLList
Returns a copy of the given XMLList object.
XMLList

descendants(name:Object = *):XMLList
Returns all descendants (children, grandchildren, great-grandchildren, and so on) of the XML object that have the given name parameter.
XMLList

elements(name:Object = *):XMLList
Calls the elements() method of each XML object.
XMLList

hasComplexContent():Boolean
Checks whether the XMLList object contains complex content.
XMLList

hasOwnProperty(p:String):Boolean
Checks for the property specified by p.
XMLList

hasSimpleContent():Boolean
Checks whether the XMLList object contains simple content.
XMLList

length():int
Returns the number of properties in the XMLList object.
XMLList

normalize():XMLList
Merges adjacent text nodes and eliminates empty text nodes for each of the following: all text nodes in the XMLList, all the XML objects contained in the XMLList, and the descendants of all the XML objects in the XMLList.
XMLList

parent():Object
Returns the parent of the XMLList object if all items in the XMLList object have the same parent.
XMLList

processingInstructions(name:String = "*"):XMLList
If a name parameter is provided, lists all the children of the XMLList object that contain processing instructions with that name.
XMLList

propertyIsEnumerable(p:String):Boolean
Checks whether the property p is in the set of properties that can be iterated in a for..in statement applied to the XMLList object.
XMLList

text():XMLList
Calls the text() method of each XML object and returns an XMLList object that contains the results.
XMLList

toString():String
Returns a string representation of all the XML objects in an XMLList object.
XMLList

toXMLString():String
Returns a string representation of all the XML objects in an XMLList object.
XMLList

valueOf():XMLList
Returns the XMLList object.
XMLList
Constructor Detail
XMLList	()	Constructor
public function XMLList(value:Object)
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Creates a new XMLList object.

Parameters
value:Object — Any object that can be converted to an XMLList object by using the top-level XMLList() function.
Related API Elements

top-level XMLList() function
Method Detail
attribute	()	method
AS3 function attribute(attributeName:*):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the attribute() method of each XML object and returns an XMLList object of the results. The results match the given attributeName parameter. If there is no match, the attribute() method returns an empty XMLList object.

Parameters

attributeName:* — The name of the attribute that you want to include in an XMLList object.
Returns
XMLList — An XMLList object of matching XML objects or an empty XMLList object.
Learn more

XMLList objects
Related API Elements

XML.attribute()
XML.attributes()
attributes	()	method	 
AS3 function attributes():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the attributes() method of each XML object and returns an XMLList object of attributes for each XML object.

Returns
XMLList — An XMLList object of attributes for each XML object.
Learn more

XMLList objects
Related API Elements

XML.attribute()
XML.attributes()
child	()	method	 
AS3 function child(propertyName:Object):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the child() method of each XML object and returns an XMLList object that contains the results in order.

Parameters

propertyName:Object — The element name or integer of the XML child.
Returns
XMLList — An XMLList object of child nodes that match the input parameter.
Learn more

XMLList objects
Related API Elements

XML.child()
children	()	method	 
AS3 function children():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the children() method of each XML object and returns an XMLList object that contains the results.

Returns
XMLList — An XMLList object of the children in the XML objects.
Learn more

XMLList objects
Related API Elements

XML.children()
comments	()	method	 
AS3 function comments():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the comments() method of each XML object and returns an XMLList of comments.

Returns
XMLList — An XMLList of the comments in the XML objects.
Learn more

XMLList objects
Related API Elements

XML.comments()
contains	()	method	 
AS3 function contains(value:XML):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks whether the XMLList object contains an XML object that is equal to the given value parameter.

Parameters

value:XML — An XML object to compare against the current XMLList object.
Returns
Boolean — If the XMLList contains the XML object declared in the value parameter, then true; otherwise false.
Learn more

XMLList objects
copy	()	method	 
AS3 function copy():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a copy of the given XMLList object. The copy is a duplicate of the entire tree of nodes. The copied XML object has no parent and returns null if you attempt to call the parent() method.

Returns
XMLList — The copy of the XMLList object.
Learn more

XMLList objects
descendants	()	method	 
AS3 function descendants(name:Object = *):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns all descendants (children, grandchildren, great-grandchildren, and so on) of the XML object that have the given name parameter. The name parameter can be a QName object, a String data type, or any other data type that is then converted to a String data type.

To return all descendants, use the asterisk (*) parameter. If no parameter is passed, the string "*" is passed and returns all descendants of the XML object.

Parameters

name:Object (default = *) — The name of the element to match.
Returns
XMLList — An XMLList object of the matching descendants (children, grandchildren, and so on) of the XML objects in the original list. If there are no descendants, returns an empty XMLList object.
Learn more

XMLList objects
Related API Elements

XML.descendants()
elements	()	method	 
AS3 function elements(name:Object = *):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the elements() method of each XML object. The name parameter is passed to the descendants() method. If no parameter is passed, the string "*" is passed to the descendants() method.

Parameters

name:Object (default = *) — The name of the elements to match.
Returns
XMLList — An XMLList object of the matching child elements of the XML objects.
Related API Elements

XML.elements()
hasComplexContent	()	method	 
AS3 function hasComplexContent():Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks whether the XMLList object contains complex content. An XMLList object is considered to contain complex content if it is not empty and either of the following conditions is true:

The XMLList object contains a single XML item with complex content.
The XMLList object contains elements.
Returns
Boolean — If the XMLList object contains complex content, then true; otherwise false.
Learn more

XMLList objects
Related API Elements

hasSimpleContent()
XML.hasComplexContent()
XML.hasSimpleContent()
hasOwnProperty	()	method	 
AS3 function hasOwnProperty(p:String):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks for the property specified by p.

Parameters

p:String — The property to match.
Returns
Boolean — If the parameter exists, then true; otherwise false.
Learn more

XMLList objects
hasSimpleContent	()	method	 
AS3 function hasSimpleContent():Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks whether the XMLList object contains simple content. An XMLList object is considered to contain simple content if one or more of the following conditions is true:

The XMLList object is empty
The XMLList object contains a single XML item with simple content
The XMLList object contains no elements
Returns
Boolean — If the XMLList contains simple content, then true; otherwise false.
Learn more

XMLList objects
Related API Elements

hasComplexContent()
XML.hasComplexContent()
XML.hasSimpleContent()
length	()	method	 
AS3 function length():int
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the number of properties in the XMLList object.

Returns
int — The number of properties in the XMLList object.
Learn more

XMLList objects
normalize	()	method	 
AS3 function normalize():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Merges adjacent text nodes and eliminates empty text nodes for each of the following: all text nodes in the XMLList, all the XML objects contained in the XMLList, and the descendants of all the XML objects in the XMLList.

Returns
XMLList — The normalized XMLList object.
Learn more

XMLList objects
parent	()	method	 
AS3 function parent():Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the parent of the XMLList object if all items in the XMLList object have the same parent. If the XMLList object has no parent or different parents, the method returns undefined.

Returns
Object — Returns the parent XML object.
Learn more

XMLList objects
processingInstructions	()	method	 
AS3 function processingInstructions(name:String = "*"):XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
If a name parameter is provided, lists all the children of the XMLList object that contain processing instructions with that name. With no parameters, the method lists all the children of the XMLList object that contain any processing instructions.

Parameters

name:String (default = "*") — The name of the processing instructions to match.
Returns
XMLList — An XMLList object that contains the processing instructions for each XML object.
Learn more

XMLList objects
Related API Elements

XML.processingInstructions()
propertyIsEnumerable	()	method	 
AS3 function propertyIsEnumerable(p:String):Boolean
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Checks whether the property p is in the set of properties that can be iterated in a for..in statement applied to the XMLList object. This is true only if toNumber(p) is greater than or equal to 0 and less than the length of the XMLList object.

Parameters

p:String — The index of a property to check.
Returns
Boolean — If the property can be iterated in a for..in statement, then true; otherwise false.
Learn more

XMLList objects
text	()	method	 
AS3 function text():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Calls the text() method of each XML object and returns an XMLList object that contains the results.

Returns
XMLList — An XMLList object of all XML properties of the XMLList object that represent XML text nodes.
Learn more

XMLList objects
Related API Elements

XML.text()
toString	()	method	 
AS3 function toString():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a string representation of all the XML objects in an XMLList object. The rules for this conversion depend on whether the XML object has simple content or complex content:

If the XML object has simple content, toString() returns the string contents of the XML object with the following stripped out: the start tag, attributes, namespace declarations, and end tag.
If the XML object has complex content, toString() returns an XML encoded string representing the entire XML object, including the start tag, attributes, namespace declarations, and end tag.
To return the entire XML object every time, use the toXMLString() method.

Returns
String — The string representation of the XML object.
More examples

XML type conversion
Learn more

XMLList objects
Related API Elements

hasComplexContent()
hasSimpleContent()
toXMLString()

Example  ( How to use this example )

The following example shows what the toString() method returns when the XML object has simple content:
var test:XML = <type name="Joe">example</type>;
trace(test.toString()); //example

The following example shows what the toString() method returns when the XML object has complex content:
var test:XML = 
<type name="Joe">
    <base name="Bob"></base>
    example
</type>;
trace(test.toString());
  // <type name="Joe">
  // <base name="Bob"/>
  // example
  // </type> 
toXMLString	()	method	 
AS3 function toXMLString():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns a string representation of all the XML objects in an XMLList object. Unlike the toString() method, the toXMLString() method always returns the start tag, attributes, and end tag of the XML object, regardless of whether the XML object has simple content or complex content. (The toString() method strips out these items for XML objects that contain simple content.)

Returns
String — The string representation of the XML object.
More examples

XML type conversion
Learn more

XMLList objects
Related API Elements

toString()
valueOf	()	method	 
AS3 function valueOf():XMLList
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the XMLList object.

Returns
XMLList — Returns the current XMLList object.
Learn more

XMLList objects
Examples How to use this example
XMLListExample.as

The following example creates an XML property named books and adds several items with book publisher and name tags to a node named books. Then the showBooksByPublisher() method is called, which takes the XMLList and returns each item matching the publisher, "Addison-Wesley."
package {
    import flash.display.Sprite;

    public class XMLListExample extends Sprite {
        private var books:XML;

        public function XMLListExample() {
            books =    <books>
                        <book publisher="Addison-Wesley" name="Design Patterns" />
                        <book publisher="Addison-Wesley" name="The Pragmatic Programmer" />
                        <book publisher="Addison-Wesley" name="Test Driven Development" />
                        <book publisher="Addison-Wesley" name="Refactoring to Patterns" />
                        <book publisher="O'Reilly Media" name="The Cathedral & the Bazaar" />
                        <book publisher="O'Reilly Media" name="Unit Test Frameworks" />
                    </books>;

            showBooksByPublisher("Addison-Wesley");
        }

        private function showBooksByPublisher(name:String):void {
            var results:XMLList = books.book.(@publisher == name);
            showList(results);
        }

        private function showList(list:XMLList):void {
            var item:XML;
            for each(item in list) {
                trace("item: " + item.toXMLString());
            }
        }
    }
}

Package	Top Level
Class	public final class Namespace
Inheritance	Namespace Inheritance Object
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9, Flash Lite 4
The Namespace class contains methods and properties for defining and working with namespaces. There are three scenarios for using namespaces:
Namespaces of XML objects Namespaces associate a namespace prefix with a Uniform Resource Identifier (URI) that identifies the namespace. The prefix is a string used to reference the namespace within an XML object. If the prefix is undefined, when the XML is converted to a string, a prefix is automatically generated.
Namespace to differentiate methods Namespaces can differentiate methods with the same name to perform different tasks. If two methods have the same name but separate namespaces, they can perform different tasks.
Namespaces for access control Namespaces can be used to control access to a group of properties and methods in a class. If you place the properties and methods into a private namespace, they are inaccessible to any code that does not have access to that namespace. You can grant access to the group of properties and methods by passing the namespace to other classes, methods or functions.
This class shows two forms of the constructor method because each form accepts different parameters.

This class (along with the XML, XMLList, and QName classes) implements powerful XML-handling standards defined in ECMAScript for XML (E4X) specification (ECMA-357 edition 2).

View the examples

More examples

Using XML namespaces
Learn more

ECMAScript for XML (E4X) specification (ECMA-357 edition 2)
Related API Elements

XML
XMLList
QName

Public Properties
 Show Inherited Public Properties
  Property	Defined By
    prefix : String
The prefix of the namespace.
Namespace
    uri : String
The Uniform Resource Identifier (URI) of the namespace.
Namespace
Public Methods
 Show Inherited Public Methods
  Method	Defined By

Namespace(prefixValue:*, uriValue:*)
Creates a Namespace object according to the values of the prefixValue and uriValue parameters.
Namespace

Namespace(uriValue:*)
Creates a Namespace object.
Namespace

toString():String
Equivalent to the Namespace.uri property.
Namespace

valueOf():String
Returns the URI value of the specified object.
Namespace
Property Detail
prefix	property
prefix:String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
The prefix of the namespace.



Implementation
    public function get prefix():String
    public function set prefix(value:String):void
uri	property	 
uri:String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
The Uniform Resource Identifier (URI) of the namespace.



Implementation
    public function get uri():String
    public function set uri(value:String):void
Constructor Detail
Namespace	()	Constructor
public function Namespace(prefixValue:*, uriValue:*)
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Creates a Namespace object according to the values of the prefixValue and uriValue parameters. This constructor requires both parameters.

The value of the prefixValue parameter is assigned to the prefix property as follows:

If undefined is passed, prefix is set to undefined.
If the value is a valid XML name, as determined by the isXMLName() function, it is converted to a string and assigned to the prefix property.
If the value is not a valid XML name, the prefix property is set to undefined.
The value of the uriValue parameter is assigned to the uri property as follows:

If a QName object is passed, the uri property is set to the value of the QName object's uri property.
Otherwise, the uriValue parameter is converted to a string and assigned to the uri property.
Note: This class shows two constructor method entries because each form accepts different parameters. The constructor behaves differently depending on the type and number of arguments passed, as detailed in each entry. ActionScript 3.0 does not support method or constructor overloading.

Parameters
prefixValue:* — The prefix to use for the namespace.

uriValue:* — The Uniform Resource Identifier (URI) of the namespace.
Namespace	()	Constructor	 
public function Namespace(uriValue:*)
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Creates a Namespace object. The values assigned to the uri and prefix properties of the new Namespace object depend on the type of value passed for the uriValue parameter:

If no value is passed, the prefix and uri properties are set to an empty string.
If the value is a Namespace object, a copy of the object is created.
If the value is a QName object, the uri property is set to the uri property of the QName object.
Note: This class shows two constructor entries because each form accepts different parameters. The constructor behaves differently depending on the type and number of parameters passed, as detailed in each entry. ActionScript 3.0 does not support method or constructor overloading.

Parameters
uriValue:* — The Uniform Resource Identifier (URI) of the namespace.
Method Detail
toString	()	method
AS3 function toString():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Equivalent to the Namespace.uri property.

Returns
String — The Uniform Resource Identifier (URI) of the namespace, as a string.
valueOf	()	method	 
AS3 function valueOf():String
Language Version: 	ActionScript 3.0
Runtime Versions: 	AIR 1.0, Flash Player 9
Returns the URI value of the specified object.

Returns
String — The Uniform Resource Identifier (URI) of the namespace, as a string.
Examples How to use this example
NamespaceExample.as

The following example shows how to work with namespaces defined in XML objects. This is accomplished with the following steps:
The example defines three Namespace objects, each with a unique URI that defines a namespace.
The example defines an XML variable named myXML and assigns it to the return value of getRSS(). The getRSS() method defines an XML object that contains several namespaces and returns that XML object.
The example declares and evaluates an Array variable by calling the parseRSS() method with myXML passed to it. In parseRSS(), the default XML namespace is defined as rss and the example defines an XMLList variable by assigning the list of item objects in myXML. An array is created and populated with various nodes within myXML.item. The array is then returned.
The elements in the array are printed using a for loop and three calls to trace().
package {
    import flash.display.Sprite;

    public class NamespaceExample extends Sprite {
        private var rss:Namespace = new Namespace("http://purl.org/rss/1.0/");
        private var rdf:Namespace = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        private var dc:Namespace  = new Namespace("http://purl.org/dc/elements/1.1/");

        public function NamespaceExample() {
            var myXML:XML = getRSS();
            var rssItems:Array = parseRSS(myXML);

            var len:uint = rssItems.length;
            for (var i:uint; i < len; i++) {
                trace(rssItems[i].title);
                trace(rssItems[i].creator);
                trace(rssItems[i].date);
                // Adobe Flash Developer Center
                // Adobe
                // 2005-08-08
                // Flex Developer Center
                // Adobe
                // 2005-10-16                
            }
        }

        private function parseRSS(rssXML:XML):Array {
            default xml namespace = rss;

            var items:XMLList = rssXML.item;

            var arr:Array = new Array();            
            var len:uint = items.length();
            for (var i:uint; i < len; i++) {
                arr.push({title:items[i].title, creator:items[i].dc::creator, date:items[i].dc::date});
            }

            return arr;
        }

        private function getRSS():XML {
            var myXML:XML =  <rdf:RDF
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://purl.org/rss/1.0/"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
            >
              <channel rdf:about="http://www.xml.com/cs/xml/query/q/19">
                <title>Test RSS</title>
                <link>http://www.adobe.com/</link>
                <description>This is a test RSS document.</description>
                <language>en-us</language>
                <items>
                  <rdf:Seq>
                <rdf:li rdf:resource="http://www.adobe.com/devnet/flash/"/>
                <rdf:li rdf:resource="http://www.adobe.com/devnet/flex/"/>
                  </rdf:Seq>
                </items>
              </channel>
              <item rdf:about="http://www.adobe.com/devnet/flash/">
                <title>Adobe Flash Developer Center</title>
                <link>http://www.adobe.com/devnet/flash/</link>
                <description>Welcome to the Flash Developer Center</description>
                <dc:creator>Adobe</dc:creator>
                <dc:date>2005-08-08</dc:date>    
              </item>
              <item rdf:about="http://www.adobe.com/devnet/flex/">
                <title>Flex Developer Center</title>
                <link>http://www.adobe.com/devnet/flex/</link>
                <description>Welcome to the Flex Developer Center</description>
                <dc:creator>Adobe</dc:creator>
                <dc:date>2005-10-16</dc:date>    
              </item>
            </rdf:RDF>;

            return myXML;
        }
    }
}
Namespace_2_Example.as

The following example shows how namespaces can be used to differentiate methods that have the same name but perform different tasks. In this example, three methods named hello() reside in separate namespaces; each returns a different string when called.
package {

    import flash.display.Sprite;

    public class Namespace_2_Example extends Sprite {    
        public function Namespace_2_Example() {
            var vocab:MultilingualVocabulary = new MultilingualVocabulary();

            trace(vocab.hello());    // hello

            var languages:Array = vocab.getLanguages();

            for (var i:uint; i < languages.length; i++) {
                var ns:Namespace = languages[i];
                if (ns != null) {
                    trace(ns.toString() + ": " + vocab.ns::hello());
                    // hello
                    // MultilingualVocabulary:Hawaiian: aloha
                    // MultilingualVocabulary:French: bon jour
                }
            }
        }
    }    
}

class MultilingualVocabulary {
    public namespace French;
    public namespace Hawaiian;
    private var languages:Array;

    public function MultilingualVocabulary() {
        languages = new Array(Hawaiian, French);
    }

    public function hello():String { 
        return "hello";
    }

    Hawaiian function hello():String {
        return "aloha";
    }

    French function hello():String { 
        return "bon jour";
    }

    public function getLanguages():Array {
        return languages;
    }
}
Namespace_3_Example.as

The following example uses namespace names to select an appropriate variable value. It shows how you can store a namespace value in a variable and use that variable to refer to objects within that namespace.
The example defines namespaces and colors that correspond to mouse states for a rectangular button. Each time the button is drawn, the example applies the appropriate color (out is red; over is yellow; down is white) by referencing the bgcolor variable for the corresponding namespace (out, over, down).

package {
    import flash.display.Sprite;

    public class Namespace_3_Example extends Sprite {     
        public function Namespace_3_Example() {
            addChild(new StateButton("Press Me."));
        }
    }
}

import flash.display.Sprite;
import flash.text.TextField;
import flash.events.Event;
import flash.events.MouseEvent;

class StateButton extends Sprite{
    private namespace out;
    private namespace over;
    private namespace down;
    private var label:TextField;
    private var labelTxt:String;
    private var ns:Namespace;
    out var bgColor:Number = 0xFF0000;
    over var bgColor:Number = 0xFFFF00;
    down var bgColor:Number = 0xFFFFFF;

    public function StateButton(str:String) {
        buttonMode = true;
        labelTxt = str;
        ns = out;
        draw();
        addLabel();
        addListeners();
    }

    private function addLabel():void {
        label = new TextField();
        label.text = labelTxt;
        label.width = 50;
        label.height = 20;
        label.mouseEnabled = false;
        addChild(label);
    }

    private function addListeners():void {
        addEventListener(MouseEvent.MOUSE_UP, mouseOverHandler);
        addEventListener(MouseEvent.MOUSE_OUT, mouseOutHandler);
        addEventListener(MouseEvent.MOUSE_OVER, mouseOverHandler);
        addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);
    }

    private function mouseOutHandler(e:Event):void {
        ns = out;
        draw();
    }

    private function mouseOverHandler(e:Event):void {
        ns = over;
        draw();
    }

    private function mouseDownHandler(e:Event):void {
        ns = down;
        draw();
    }

    private function draw():void {
        this.graphics.clear();
        this.graphics.beginFill(ns::bgColor);
        this.graphics.drawRect(0, 0, 60, 20);
    }
} 
