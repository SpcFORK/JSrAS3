import runtime from './getRuntime'

import * as flash from './flash'
// import * as air from './air'

const eobj = {
  flash,
  // air
}

export default eobj

if (runtime == 'web') {
  Object.assign(globalThis, eobj)
  Object.assign(window, eobj)
  Object.assign(document, eobj)
}
else if (runtime == 'node') try {
  module.exports = eobj
} catch { }