import './AST_ApplicationDomain'
import './AST_SecurityDomain'

declare global {
  /**
   * The JPEGLoaderContext class includes a property for enabling a deblocking filter when loading a JPEG image. The deblocking filter improves an image's quality at higher compression settings by smoothing neighboring pixels. To apply deblocking when loading a JPEG image, create a JPEGLoaderContext object, and set its deblockingFilter property. Then use the JPEGLoaderContext object name as the value of the context parameter of the load() method of the Loader object used to load the image.
   * The JPEGLoaderContext class extends the LoaderContext class. Set the checkPolicyFile property to true if you need programmatic access to the pixels of the loaded image (for example, if you're using the BitmapData.draw() method). Setting the checkPolicyFile property is not necessary for AIR content running in the application sandbox.
   */
  class AST_JPEGLoaderContext {
    /** deblockingFilter : Number = 0.0
     *
     * Specifies the strength of the deblocking filter.
     */
    deblockingFilter: number;

    /** JPEGLoaderContext(deblockingFilter:Number = 0.0, checkPolicyFile:Boolean = false, applicationDomain:ApplicationDomain = null, securityDomain:SecurityDomain = null)
     *
     * Creates a new JPEGLoaderContext object with the specified settings.
     */
    constructor(
      deblockingFilter: number,
      checkPolicyFile: boolean,
      applicationDomain: AST_ApplicationDomain,
      securityDomain: AST_SecurityDomain
    )
  }
}

export type { AST_JPEGLoaderContext }