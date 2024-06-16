declare global {
  const AS_trapallkeys: boolean;
  const AS_allowscale: boolean;
  const AS_showmenu: boolean;

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

  /**
   * The Capabilities class provides properties that describe the system and runtime that are hosting the application. For example, a mobile phone's screen might be 100 square pixels, black and white, whereas a PC screen might be 1000 square pixels, color. By using the Capabilities class to determine what capabilities the client has, you can provide appropriate content to as many users as possible. When you know the device's capabilities, you can tell the server to send the appropriate SWF files or tell the SWF file to alter its presentation.
   * However, some capabilities of Adobe AIR are not listed as properties in the Capabilities class. They are properties of other classes:
   *
   * Property	Description
   * NativeApplication.supportsDockIcon	Whether the operating system supports application doc icons.
   * NativeApplication.supportsMenu	Whether the operating system supports a global application menu bar.
   * NativeApplication.supportsSystemTrayIcon	Whether the operating system supports system tray icons.
   * NativeWindow.supportsMenu	Whether the operating system supports window menus.
   * NativeWindow.supportsTransparency	Whether the operating system supports transparent windows.
   *
   * Do not use Capabilities.os or Capabilities.manufacturer to determine a capability based on the operating system. Basing a capability on the operating system is a bad idea, since it can lead to problems if an application does not consider all potential target operating systems. Instead, use the property corresponding to the capability for which you are testing.
   *
   * You can send capabilities information, which is stored in the Capabilities.serverString property as a URL-encoded string, using the GET or POST HTTP method. The following example shows a server string for a computer that has MP3 support and 1600 x 1200 pixel resolution, that is running Windows XP with an input method editor (IME) installed, and does not have support for multichannel audio:
   *
   * A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=t&
     SB=f&DEB=t&V=WIN%209%2C0%2C0%2C0&M=Adobe%20Windows&
     R=1600x1200&DP=72&COL=color&AR=1.0&OS=Windows%20XP&
     L=en&PT=External&AVD=f&LFD=f&WD=f&IME=t&DD=f&
     DDP=f&DTS=f&DTE=f&DTH=f&DTM=f
   *
   * The following table lists the properties of the Capabilities class and corresponding server strings. It also lists the server strings for the multichannel audio types.
   *
   * Capabilities class property	Server string
   * avHardwareDisable	AVD
   * hasAccessibility	ACC
   * hasAudio	A
   * hasAudioEncoder	AE
   * hasEmbeddedVideo	EV
   * hasIME	IME
   * hasMP3	MP3
   * hasPrinting	PR
   * hasScreenBroadcast	SB
   * hasScreenPlayback	SP
   * hasStreamingAudio	SA
   * hasStreamingVideo	SV
   * hasTLS	TLS
   * hasVideoEncoder	VE
   * isDebugger	DEB
   * language	L
   * localFileReadDisable	LFD
   * manufacturer	M
   * maxLevelIDC	ML
   * os	OS
   * pixelAspectRatio	AR
   * playerType	PT
   * screenColor	COL
   * screenDPI	DP
   * screenResolutionX	R
   * screenResolutionY	R
   * version	V
   * supports Dolby Digital audio	DD
   * supports Dolby Digital Plus audio	DDP
   * supports DTS audio	DTS
   * supports DTS Express audio	DTE
   * supports DTS-HD High Resolution Audio	DTH
   * supports DTS-HD Master Audio	DTM
   *
   * There is also a WD server string that specifies whether windowless mode is disabled. Windowless mode can be disabled in Flash Player due to incompatibility with the web browser or to a user setting in the mms.cfg file. There is no corresponding Capabilities property.

All properties of the Capabilities class are read-only.
   */
  class AST_Capabilities {
    /** avHardwareDisable : Boolean
     *
     * [read-only] Whether the operating system disables the hardware acceleration of Flash Player.
     */
    static readonly avHardwareDisable: boolean;

    /** hasAccessibility : Boolean
     *
     * [read-only] Whether the operating system supports accessibility.
     */
    static readonly hasAccessibility: boolean;

    /** hasAudio : Boolean
     *
     * [read-only] Whether the operating system supports audio.
     */
    static readonly hasAudio: boolean;

    /** hasAudioEncoder : Boolean
     *
     * [read-only] Whether the operating system supports audio encoders.
     */
    static readonly hasAudioEncoder: boolean;

    /** hasEmbeddedVideo : Boolean
     *
     * [read-only] Whether the operating system supports embedded video.
     */
    static readonly hasEmbeddedVideo: boolean;

    /** hasIME : Boolean
     *
     * [read-only] Whether the operating system supports IME.
     */
    static readonly hasIME: boolean;

    /** hasMP3 : Boolean
     *
     * [read-only] Whether the operating system supports MP3.
     */
    static readonly hasMP3: boolean;

    /** hasPrinting : Boolean
     *
     * [read-only] Whether the operating system supports printing.
     */
    static readonly hasPrinting: boolean;

    /** hasScreenBroadcast : Boolean
     *
     * [read-only] Whether the operating system supports screen broadcast.
     */
    static readonly hasScreenBroadcast: boolean;

    /** hasScreenPlayback : Boolean
     *
     * [read-only] Whether the operating system supports screen playback.
     */
    static readonly hasScreenPlayback: boolean;

    /** hasStreamingAudio : Boolean
     *
     * [read-only] Whether the operating system supports streaming audio.
     */
    static readonly hasStreamingAudio: boolean;

    /** hasStreamingVideo : Boolean
     *
     * [read-only] Whether the operating system supports streaming video.
     */
    static readonly hasStreamingVideo: boolean;

    /** hasTLS : Boolean
     *
     * [read-only] Whether the operating system supports TLS.
     */
    static readonly hasTLS: boolean;

    /** hasVideoEncoder : Boolean
     *
     * [read-only] Whether the operating system supports video encoders.
     */
    static readonly hasVideoEncoder: boolean;

    /** isDebugger : Boolean
     *
     * [read-only] Whether the operating system is a debugger.
     */
    static readonly isDebugger: boolean;

    /**	isEmbeddedInAcrobat : Boolean
     *
     * [read-only] Whether the operating system is embedded in Acrobat.
     */
    static readonly isEmbeddedInAcrobat: false;

    /** language : String
     *
     * [static] [read-only] Specifies the language code of the system on which the content is running.
     */
    static readonly language: string;

    /** languages : Array
     *
     * [static] [read-only] An array of strings that contain information about the user's preferred user interface languages, as set through the operating system.
     */
    static readonly languages: string[];

    /** localFileReadDisable : Boolean
     *
     * [static] [read-only] Specifies whether read access to the user's hard disk has been administratively prohibited (true) or allowed (false).
     */
    static readonly localFileReadDisable: boolean;

    /** manufacturer : String
     *
     * [static] [read-only] Specifies the manufacturer of the running version of Flash Player or the AIR runtime, in the format "Adobe OSName".
     */
    static readonly manufacturer: string;

    /** os : String
     *
     * [static] [read-only] Specifies the current operating system.
     */
    static readonly os: string;

    /** pixelAspectRatio : Number
     *
     * [static] [read-only] Specifies the pixel aspect ratio of the screen.
     */
    static readonly pixelAspectRatio: number;

    /** playerType : String
     *
     * [static] [read-only] Specifies the type of the player.
     */
    static readonly playerType: string;

    /** screenColor : String
     *
     * [static] [read-only] Specifies the screen color.
     */
    static readonly screenColor: string;

    /** screenDPI : Number
     *
     * [static] [read-only] Specifies the screen DPI.
     */
    static readonly screenDPI: number;

    /** screenResolutionX : Number
     *
     * [static] [read-only] Specifies the maximum horizontal resolution of the screen.
     */
    static readonly screenResolutionX: number;

    /** screenResolutionY : Number
     *
     * [static] [read-only] Specifies the maximum vertical resolution of the screen.
     */
    static readonly screenResolutionY: number;

    /** serverString : String
     *
     * [static] [read-only] A URL-encoded string that specifies values for each Capabilities property.
     */
    static readonly serverString: string;

    /** version : String
     *
     * [static] [read-only] Specifies the Flash Player or Adobe® AIR® platform and version information.
     */
    static readonly version: string;
  }


}

export type {
  AST_ApplicationDomain,
  AST_Capabilities
}