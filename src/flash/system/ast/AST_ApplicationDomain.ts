declare global {
  
  /**
   * The ApplicationDomain class is a container for discrete groups of class definitions. Application domains are used to partition classes that are in the same security domain. They allow multiple definitions of the same class to exist and allow children to reuse parent definitions.
   * Application domains are used when an external SWF file is loaded through the Loader class. All ActionScript 3.0 definitions in the loaded SWF file are stored in the application domain, which is specified by the applicationDomain property of the LoaderContext object that you pass as a context parameter of the Loader object's load() or loadBytes() method. The LoaderInfo object also contains an applicationDomain property, which is read-only.
   *
   * All code in a SWF file is defined to exist in an application domain. The current application domain is where your main application runs. The system domain contains all application domains, including the current domain, which means that it contains all Flash Player classes.
   *
   * Every application domain, except the system domain, has an associated parent domain. The parent domain of your main application's application domain is the system domain. Loaded classes are defined only when their parent doesn't already define them. You cannot override a loaded class definition with a newer definition.
   *
   * For usage examples of application domains, see the ActionScript 3.0 Developer's Guide.
   *
   * The ApplicationDomain() constructor function allows you to create an ApplicationDomain object.
   */
  class AST_ApplicationDomain {
    /** currentDomain : ApplicationDomain
     *
     * [static] [read-only] Gets the current application domain in which your code is executing.
     */
    static currentDomain: AST_ApplicationDomain

    /** parentDomain : ApplicationDomain
     *
     * [read-only] Gets the parent domain of this application domain.
     */
    readonly parentDomain: AST_ApplicationDomain;

    /** ApplicationDomain(parentDomain:ApplicationDomain = null)
     *
     * Creates a new application domain.
     */
    constructor(parentDomain?: AST_ApplicationDomain);

    /** getDefinition(name:String):Object
     *
     * Gets a public definition from the specified application domain.
     */
    getDefinition(name: string): any;

    /** hasDefinition(name:String):Boolean
     * 
     * Checks to see if a public definition exists within the specified application domain.
     */
    hasDefinition(name: string): boolean;
  }
  
}

export type {
  AST_ApplicationDomain,
}