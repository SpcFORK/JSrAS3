import './global'

type TODO = unknown

import fxcommand from './fxcommand'
import ApplicationDomain from './ApplicationDomain';
import Capabilities from './Capabilities';
import IME from './IME';
import IMEConversionMode from './IMEConversionMode';
import LoaderContext from './LoaderContext';
import Security from './Security';
import SecurityDomain from './SecurityDomain';
import SecurityPanel from './SecurityPanel';
import System from './System';

/**
 * The flash.system package contains classes for accessing system-level functionality, such as security, garbage collection, etc.
 */
class AS_System {

  /**
   * Lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser.
   * @unsure
   */
  fxcommand = fxcommand.bind(this)

  /**
   * The ApplicationDomain class is a container for discrete groups of class definitions.
   */
  ApplicationDomain = ApplicationDomain

  /**
   * The Capabilities class provides properties that describe the system and runtime that are hosting the application.
   */
  Capabilities = Capabilities;

  /**
   * The IME class lets you directly manipulate the operating system's input method editor (IME) in the Flash runtime application that is running on a client computer.
   */
  IME: TODO;

  /**
   * This class contains constants for use with the IME.conversionMode property.
   */
  IMEConversionMode: TODO;

  /**
   * The LoaderContext class provides options for loading SWF files and other media by using the Loader class.
   */
  LoaderContext: TODO;

  /**
   * The Security class lets you specify how content in different domains can communicate with each other.
   */
  Security: TODO;

  /**
   * The SecurityDomain class represents the current security "sandbox," also known as a security domain.
   */
  SecurityDomain: TODO;

  /**
   * The SecurityPanel class provides values for specifying which Security Settings panel you want to display.
   */
  SecurityPanel: TODO;

  /**
   * The System class contains properties related to local settings and operations.
   */
  System: TODO;
}