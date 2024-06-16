import '../../display/ast/AST_DisplayObjectContainer'
import './AST_ApplicationDomain'
import './AST_SecurityDomain'

declare global {
  class AST_LoaderContext {
    allowCodeImport: boolean;
    allowLoadBytesCodeExecution: boolean;
    applicationDomain: AST_ApplicationDomain | null;
    checkPolicyFile: boolean;
    imageDecodingPolicy: string;
    parameters: Record<string, any>;
    requestedContentParent: AST_DisplayObjectContainer;
    securityDomain: AST_SecurityDomain | null;

    constructor(
      checkPolicyFile: boolean,
      applicationDomain: AST_ApplicationDomain | null,
      securityDomain: AST_SecurityDomain | null
    )
  }
}

export { AST_LoaderContext }