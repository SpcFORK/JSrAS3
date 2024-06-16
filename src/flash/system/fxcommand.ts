import './global';

/** fscommand(command:String, args:String = ""):void
 *
 * Lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. You can also use the fscommand() function to pass messages to Director or to Visual Basic, Visual C++, and other programs that can host ActiveX controls.
 *
 * The fscommand() function lets a SWF file communicate with a script in a web page. However, script access is controlled by the web page's allowScriptAccess setting. (You set this attribute in the HTML code that embeds the SWF file—for example, in the PARAM tag for Internet Explorer or the EMBED tag for Netscape.)
 *
 * When allowScriptAccess is set to "sameDomain" (the default), scripting is allowed only from SWF files that are in the same domain as the web page.
 * 
 * When allowScriptAccess is set to "always", the SWF file can communicate with the HTML page in which it is embedded even when the SWF file is from a different domain than the HTML page.
 *
 * When allowScriptAccess is set to "never", the SWF file cannot communicate with any HTML page. Note that using this value is deprecated and not recommended, and shouldn't be necessary if you don't serve untrusted SWF files from your own domain. If you do need to serve untrusted SWF files, Adobe recommends that you create a distinct subdomain and place all untrusted content there.
 *
 * You can prevent a SWF file from using this method by setting the allowNetworking parameter of the the object and embed tags in the HTML page that contains the SWF content
 *
 * The fscommand() function is not allowed if the calling SWF file is in the local-with-file-system or local-with-network sandbox and the containing HTML page is in an untrusted sandbox
 *
 * For more information related to security, see the Flash Player Developer Center Topic: Security
 *
 * Usage 1: To use fscommand() to send a message to Flash Player, you must use predefined commands and parameters. The following table shows the values that you can specify for the fscommand() function's command and args parameters. These values control SWF files that are playing in Flash Player, including projectors. (A projector is a SWF file saved in a format that can run as a stand-alone application—that is, without Flash Player.
 *
 * Command	Parameter (args)	Purpose
 * * quit	None	Closes the projector.
 * * fullscreen	true or false	Specifying true sets Flash Player to full-screen mode. Specifying false returns the player to normal menu view.
 * * allowscale	true or false	Specifying false sets the player so that the SWF file is always drawn at its original size and never scaled. Specifying true forces the SWF file to scale to 100% of the player.
 * * showmenu	true or false	Specifying true enables the full set of context menu items. Specifying false hides all of the context menu items except About Flash Player and Settings.
 * * exec	Path to application	Executes an application from within the projector.
 * * trapallkeys	true or false	Specifying true sends all key events, including accelerator keys, to the onClipEvent(keyDown/keyUp) handler in Flash Player.
 *
 * Not all of the commands listed in the table are available in all applications
 * None of the commands are available in web players.
 *
 * All of the commands are available in stand-alone projector applications.
 * AIR applications should use the flash.desktop.NativeApplication class for similar functions, such as NativeApplication.nativeApplication.exit() instead of fscommand("quit").
 *
 * Ony allowscale and exec are available in test-movie players.
 * The exec command can contain only the characters A-Z, a-z, 0-9, period (.), and underscore (_). The exec command runs in the subdirectory fscommand only. In other words, if you use the exec command to call an application, the application must reside in a subdirectory named fscommand. The exec command works only from within a Flash projector file
 * sage 2: To use fscommand() to send a message to a scripting language such as JavaScript in a web browser, you can pass any two paameters in the command and args parameters. These parameters can be strings or expressions, and they are used in a JavaScript function that handles, or catches, the fscommand() function
 * 
 * in a web browser, fscommand() calls the JavaScript function moviename_DoFScommand, which resides in the web page that contains the SW file. For moviename, supply the name of the Flash object that you used for the NAME attribute of the EMBED tag or the ID property o
 the OBJECT tag. If you assign the SWF file the name "myMovie", the JavaScript function myMovie_DoFScommand is calle
 * 
 * In the web page that contains the SWF file, set the allowScriptAccess attribute to allow or deny the SWF file's ability to access th we page, as described above. (You set this attribute in the HTML code that embeds the SWF file—for example, in the PARAM tag for In
 ernet Explorer or the EMBED tag for Netscape
 * 
 * In Flash Player 10 and later running in a browser, using this method programmatically to open a pop-up window may not be successful. Vaious browsers (and browser configurations) may block pop-up windows at any time; it is not possible to guarantee any po
 -up window will appear. However, for the best chance of success, use this method to open a pop-up window only in code that execute
 *as a direct result of a user action (for example, in an event handler for a mouse click or key-press event.
 * 
 * Usage 3: The fscommand() function can send messages to Director (Macromedia Director from Adobe). These messages are interpreted by Lingo (the Director scripting language) as strings, events, or executable Lingo code. If a message is a string or an event, you mus wr
 t the Lingo code to receive the message from the fscommand() function and carry out an action in Director. For more information, se
 * the Director Support Center at www.adobe.com/support/director/
 * Usage 4: In VisualBasic, Visual C++, and other programs that can host ActiveX controls, fscommand() sends a VB event with two stngs that can be handled in the environment's programming language. For more information, use the keywords "Flash method" to search th
 Flash Support Center at www.adobe.com/support/flash
 *
 * Note: The ExternalInterface class provides better functionality for communication between JavaScript and ActionScript (Usage 2) and between ActionScript and VisualBasic, Visual C++, or other programs that can host ActiveX controls (Usage 4). You should continue to us
 fscommand() for sending messages to Flash Player (Usage 1) and Director (Usage 3
 */
export default function fxcommand(command: 'fullscreen' | 'allowscale' | 'showmenu' | 'exec' | 'trapallkeys' | 'quit', ...args: any[]): void {
  if (typeof command !== 'string') {
    throw new TypeError('command must be a string');
  }

  const formattedArgs = args.length === 0 ? [''] : args.map(arg => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg.toString();
    }
    throw new TypeError('args must be strings or numbers');
  });

  switch (command.toLowerCase()) {
    case 'fullscreen':
      document.documentElement.requestFullscreen();
      break;
    case 'allowscale':
      allowScale(formattedArgs[0] === 'true')
      break;
    case 'quit':
      window.close();
      break;
    case 'showmenu':
      // Assuming a custom implementation of showmenu
      toggleMenu(formattedArgs[0] === 'true');
      break;
    case 'exec':
      // @ TODO
      break;
    case 'trapallkeys':
      // Assuming a custom implementation of trapallkeys
      trapAllKeys(formattedArgs[0] === 'true');
      break;
    default:
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);

      params.set('fscommand', command);
      params.set('fsargs', formattedArgs.join(','));
      url.search = params.toString();
      window.location.href = url.toString();
      break;
  }
}

const gt = globalThis as any

function allowScale(allow: boolean): void {
  gt.AS_allowscale = allow;
}

function toggleMenu(show: boolean): void {
  gt.AS_showmenu = show;
  let ce = new CustomEvent('AS_showmenu', {
    detail: show
  })
  globalThis.dispatchEvent(ce);
}

function trapAllKeys(trap: boolean): void {
  gt.AS_trapallkeys = trap;
  let ce = new CustomEvent('AS_trapallkeys', {
    detail: trap
  })
}