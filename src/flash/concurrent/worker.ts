/**
 * A Worker object represents a worker, which is a virtual instance of the Flash runtime. Each Worker instance controls and provides access to the lifecycle and shared data of a single worker.
 *
 * A worker allows you to execute code "in the background" at the same time that other operations are running in another worker (including the main swf's worker). In a non-worker context some operations, for example processing a large set of data in a loop, take so long to execute that they prevent the main application thread from updating the screen quickly enough. This can cause stuttering or freezing the screen.
 *
 * Using a worker allows you to perform a long-running or slow operation in the background. Each worker runs its code in a separate thread of execution from other workers. Long-running code in one worker does not block code in another worker from executing. Instead, the two sets of code run in parallel. Consequently, a worker can be used to execute code in the background while the main application thread stays free to continue updating the screen.
 *
 * This capability of simultaneously executing multiple sets of code instructions is known as concurrency.
 *
 * Note: The use of workers for concurrency is supported in both Flash Player and AIR on desktop platforms. For mobile platforms, concurrency is supported in AIR on both Android and iOS. You can use the static isSupported property to check whether concurrency is supported before attempting to use it.
 *
 * You do not create Worker instances directly by calling the Worker() constructor. In contexts where the use of workers for concurrency is supported, at startup the runtime automatically creates the Worker associated with the main SWF, known as the primordial worker.
 * 
 * (IN JS MODE, THIS IS POSSIBLE ONLY MANUALLY)
 */
export class AS_Worker {
  
}