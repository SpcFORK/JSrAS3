declare global {
  
  /**
   * The IME class lets you directly manipulate the operating system's input method editor (IME) in the Flash runtime application that is running on a client computer. You can determine whether an IME is installed, whether or not the IME is currently enabled, and which IME is enabled. You can disable or enable the IME in the application, and you can perform other limited functions, depending on the operating system.
   * AIR profile support: This feature is supported on desktop operating systems, but it is not supported on all mobile devices. It is also not supported on AIR for TV devices. You can test for support at run time using the IME.isSupported property. See AIR Profile Support for more information regarding API support across multiple profiles.
   *
   * IMEs let users type non-ASCII text characters in multibyte languages such as Chinese, Japanese, and Korean. For more information on working with IMEs, see the documentation for the operating system for which you are developing applications. For additional resources, see the following websites:
   *
   * http://www.microsoft.com/globaldev/default.mspx
   * http://developer.apple.com/documentation/
   * http://java.sun.com
   *
   * If an IME is not active on the user's computer, calls to IME methods or properties, other than Capabilities.hasIME, will fail. Once you manually activate an IME, subsequent ActionScript calls to IME methods and properties will work as expected. For example, if you are using a Japanese IME, it must be activated before any IME method or property is called.
   *
   * The following table shows the platform coverage of this class:
   *
   * Capability	Windows	Mac OSX	Linux
   * * Determine whether the IME is installed: Capabilities.hasIME	Yes	Yes	Yes
   * * Set IME on or off: IME.enabled	Yes	Yes	Yes
   * * Find out whether IME is on or off: IME.enabled	Yes	Yes	Yes
   * * Get or set IME conversion mode: IME.conversionMode	Yes	Yes **	No
   * * Send IME the string to be converted: IME.setCompositionString()	Yes *	No	No
   * * Get from IME the original string before conversion: System.ime.addEventListener()	Yes *	No	No
   * * Send request to convert to IME: IME.doConversion()	Yes *	No	No
   *
   * Not all Windows IMEs support all of these operations. The only IME that supports them all is the Japanese IME.
   *
   * On the Macintosh, only the Japanese IME supports these methods, and third-party IMEs do not support them.
   *
   * The ActionScript 3.0 version of this class does not support Macintosh Classic.
   */
  class AST_IME {
    /**	conversionMode : String
     *
     * [static] The conversion mode of the current IME.
     */
    static readonly conversionMode: string;

    /** enabled : Boolean
     *
     * [static] Indicates whether the system IME is enabled (true) or disabled (false).
     */
    static readonly enabled: boolean;

    /** compositionAbandoned():void
     *
     * [static] Causes the runtime to abandon any composition that is in progress.
     */
    static compositionAbandoned(): void;

    /** compositionSelectionChanged(start:int, end:int):void
     *
     * [static] Call this method when the selection within the composition has been updated, either interactively or programmatically.
     */
    static compositionSelectionChanged(start: number, end: number): void;

    /** doConversion():void
     *
     * [static] Instructs the IME to select the first candidate for the current composition string.
     */
    static doConversion(): void;

    /** setCompositionString(composition:String):void
     *
     * [static] Sets the IME composition string.
     */
    static setCompositionString(composition: string): void;

    /** imeComposition
     *
     * Dispatched when a user has completed an input method editor (IME) composition and the reading string is available.
     */
    static imeComposition: CustomEvent;
  }
  
}

export type {
  AST_IME
}