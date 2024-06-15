type Env = 'unsure' | 'web' | 'node' | 'webworker' | 'worker';
var Env: Env = 'unsure';

let is = (v: PropertyKey) => Reflect.has(globalThis, v)
let check = (v: any, m: Env) => is(v) && (Env = m);

{
  check('self', 'webworker');
  check('WorkerGlobalScope', 'worker');
  
  check('module', 'node');
  check('process', 'node');
  
  check('window', 'web');
}

export default Env;