export default class ApplicationDomain implements AST_ApplicationDomain {

  /** currentDomain : ApplicationDomain
   *
   * [static] [read-only] Gets the current application domain in which your code is executing.
   */
  static readonly currentDomain: ApplicationDomain = new ApplicationDomain();

  /** parentDomain : ApplicationDomain
   *
   * [read-only] Gets the parent domain of this application domain.
   */
  get parentDomain(): ApplicationDomain {
    return this.#parentDomain;
  }
  #parentDomain: ApplicationDomain;

  #defMap = new Map<string, any>;
  
  /** ApplicationDomain(parentDomain:ApplicationDomain = null)
   *
   * Creates a new application domain.
   */
  constructor(parentDomain?: ApplicationDomain, source?: string) {
    this.#parentDomain = parentDomain || ApplicationDomain.currentDomain;

    if (ApplicationDomain.currentDomain && this !== ApplicationDomain.currentDomain) {
      this.#parentDomain.#defMap.set(source + '', this);
    }
    else
      this.#parentDomain = null as any;
  }

  /** getDefinition(name:String):Object
   *
   * Gets a public definition from the specified application domain. The definition can be that of a class, a namespace, or a function.
   */
  getDefinition(name: string) {
    return this.#defMap.get(name);
  }

  /** hasDefinition(name:String):Boolean
   *
   * Checks to see if a public definition exists within the specified application domain. The definition can be that of a class, a namespace, or a function.
   */
  hasDefinition(name: string): boolean {
    return this.#defMap.has(name);
  }
}
