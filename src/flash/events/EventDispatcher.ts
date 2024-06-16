import { AS_IEventDispatcher } from './IEventDispatcher'

interface AS_EventListener {
  priority: number
  listener: Function | WeakRef<Function>
  useCapture: boolean
}

export class AS_EventDispatcher implements AS_IEventDispatcher {

  private listeners: Map<string, AS_EventListener[]> = new Map();

  public addEventListener(type: string, listener: Function, useCapture: boolean = false, priority: number = 0, useWeakReference: boolean = false): void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    const listeners = this.listeners.get(type);
    if (listeners) {
      const index = listeners.findIndex(item => item.priority < priority);
      const eventListener: AS_EventListener = { priority, listener, useCapture };

      if (useWeakReference) {
        eventListener.listener = new WeakRef(listener);
      }

      if (index === -1) {
        listeners.push(eventListener);
      } else {
        listeners.splice(index, 0, eventListener);
      }
    }
  }

  public dispatchEvent(event: Event): boolean {
    const eventListeners = this.listeners.get(event.type);
    if (eventListeners) {
      for (const { listener } of eventListeners) {
        if (listener instanceof WeakRef) {
          const derefListener = listener.deref();
          if (derefListener) {
            derefListener(event);
          }
        } else {
          listener(event);
        }
      }
      return true;
    }
    return false;
  }

  public hasEventListener(type: string): boolean {
    return this.listeners.has(type);
  }

  public removeEventListener(type: string, listener: Function, useCapture: boolean = false): void {
    const eventListeners = this.listeners.get(type);
    if (eventListeners) {
      this.listeners.set(type, eventListeners.filter(l => {
        if (l.listener instanceof WeakRef) {
          return l.listener.deref() !== listener;
        }
        return l.listener !== listener;
      }));
    }
  }

  public willTrigger(type: string): boolean {
    return this.hasEventListener(type);
  }
}