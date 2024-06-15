/** 
 * The flash.concurrent package contains classes for supporting concurrency in Flash platform applications.
 */
class AS_Concurrent {
  /**
   * 	A Condition object is a tool for sharing a resource between workers with the additional capability of pausing execution until a particular condition is satisfied.
   */
  static Condition = AS_Condition;

  /**
   * The Mutex (short for "mutual exclusion") class provides a way to make sure that only one set of code operates on a particular block of memory or other shared resource at a time.
   */
  static Mutex = AS_Mutex;
}

/**
 * The Mutex (short for "mutual exclusion") class provides a way to make sure that only one set of code operates on a particular block of memory or other shared resource at a time. The primary use for a Mutex is to manage code in different workers accessing a shareable byte array (a ByteArray object whose shareable property is true). However, a Mutex can be used to manage workers' access to any shareable resource, such as an AIR native extension or a filesystem file. No matter what the resource, the purpose of the mutex is to ensure that only one set of code accesses the resource at a time.
 *
 * A mutex manages access using the concept of resource ownership. At any time a single mutex is "owned" by at most one worker. When ownership of a mutex switches from one worker to another the transision is atomic. This guarantees that it will never be possible for more than one worker to take ownership of the mutex. As long as code in a worker only operates on a shared resource when that worker owns the mutex, you can be certain that there will never be a conflict from multiple workers.
 *
 * Use the tryLock() method to take ownership of the mutex if it is available. Use the lock() method to pause the current worker's execution until the mutex is available, then take ownership of the mutex. Once the current worker has ownership of the mutex, it can safely operate on the shared resource. When those operations are complete, call the unlock() method to release the mutex. At that point the current worker should no longer access the shared resource.
 *
 * The Mutex class is one of the special object types that are shared between workers rather than copied between them. When you pass a mutex from one worker to another worker either by calling the Worker object's setSharedProperty() method or by using a MessageChannel object, both workers have a reference to the same Mutex object in the runtime's memory.
 */
class AS_Mutex {
  /** Mutex()
   *
   * Creates a new Mutex instance.
   */
  constructor() { }

  /** lock():void
   *
   * Pauses execution of the current worker until this mutex is available and then takes ownership of the mutex. If another worker owns the mutex when lock() is called, the calling worker's execution thread pauses at the lock() call and the worker is added to the queue of ownership requests. Once the calling worker acquires the mutex, the worker's execution continues with the line of code following the lock() call.
   *
   * Once the current worker has ownership of the mutex, it can safely operate on the shared resource. When those operations are complete, call the unlock() method to release the mutex. At that point the current worker should no longer access the shared resource.
   *
   * Internally, a mutex keeps a count of the number of lock requests it has received. The mutex must receive the same number of unlock requests before it is completely released. If code in the worker that owns the mutex locks it again (by calling the lock() method) the internal lock count increases by one. You must call the unlock() method as many times as the number of lock requests to release ownership of the mutex.
   *
   * When multiple workers are waiting for a mutex, the mutex gives priority to assigning ownership to the longest-waiting worker. However, scheduling of worker threads is managed by the host operating system so there is no guarantee of a particular code execution order across workers.
   */
  lock() { }
}

/**
 * A Condition object is a tool for sharing a resource between workers with the additional capability of pausing execution until a particular condition is satisfied.
 * A Condition object is used in conjunction with a Mutex object, and adds additional functionality to the mutex's behavior.
 * By working in combination with a mutex, the runtime ensures that each transition of ownership between workers is atomic.
 * The following is one possible workflow for using a Condition object:
 *
 * 1. Before using a Condition object, the first worker must take ownership of the condition's associated mutex by calling the Mutex object's lock() or tryLock() methods.
 * 2. The worker's code operates on the shared resource until some condition becomes false, preventing the worker from doing more work with the shared resource.
 *    For example, if the shared resource is a set of data to process, when there is no more data to process the worker can't do any more work.
 * 3. At that point, call the Condition object's wait() method to pause the worker's execution and release ownership of the mutex.
 * 4. At some point, a second worker takes ownership of the mutex.
 *    Because the mutex is available, it is safe for the second worker's code to operate on the shared resource.
 *    The second worker does whatever is necessary to satisfy the condition so that the first worker can do its work again. For example, if the first worker has no data to process, the second worker could pass more data to process into the shared resource.
 * 5. At that point, the condition related to the first worker's work is now true, so the first worker needs to be notified that the condition is fulfilled.
 *    To notify the first worker, the second worker's code calls the Condition object's notify() method or its notifyAll() method.
 * 6. In addition to calling notify(), the second worker needs to release ownership of the mutex.
 *    It does this either by calling the Mutex object's unlock() method or the Condition object's wait() method.
 *    Since the first worker called the wait() method, ownership of the mutex returns to the first worker. Code execution in the first worker then continues again with the next line of code following the wait() call.
 * 
 * The Condition class is one of the special object types that are shared between workers rather than copied between them. When you pass a condition from one worker to another worker either by calling the Worker object's setSharedProperty() method or by using a MessageChannel object, both workers have a reference to the same Condition object in the runtime's memory.
 */
class AS_Condition {
  /** isSupported:Boolean  [read-only]
   *
   * Indicates whether the Condition class is supported for the current platform.
   *
   * Note: if the Mutex class is not supported, creation of a Condition instance is not possible and this property is false.
   */
  #isSupported: boolean = false;
  get isSupported(): boolean {
    return this.#isSupported;
  }

  /** mutex:Mutex  [read-only]
   *
   * The mutex associated with this condition.
   */
  #mutex: AS_Mutex;
  get mutex(): AS_Mutex {
    return this.#mutex;
  }

  /** Condition(mutex:Mutex)
   *
   * Creates a new Condition instance.
   */
  constructor(mutex: AS_Mutex) {
    if (!this.#isSupported) throw new Error("Condition class is not supported");
    this.#mutex = mutex;
    this.#isSupported = true;
  }

  /** notify():void
   *
   * Specifes that the condition that this Condition object represents has been satisfied and that ownership of the mutex will be returned to the next worker (if any) that's waiting on this condition.
   *
   * Calling this method doesn't automatically release ownership of the mutex.
   * After calling notify(), you should explicitly release ownership of the mutex in one of two ways:
   * * call the Mutex.unlock() method if the current worker doesn't need the mutex again,
   * * or call wait() if the worker should get ownership of the mutex again after other workers have completed their work.
   *
   * One the mutex's lock is released, the next worker in the queue of workers that have called the wait() method acquires the mutex and resumes code execution.
   *
   * Throws
   * * IllegalOperationError — if the current worker doesn't own this condition's mutex
   */
  notify(): void {
  
  }
}