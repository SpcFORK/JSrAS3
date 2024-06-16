import { AS_IEventDispatcher } from './IEventDispatcher'
import { AS_EventListener } from '../EventListener'

declare global {
  class AST_EventDispatcher implements AS_IEventDispatcher {

    private listeners: Map<string, AS_EventListener[]>

    public addEventListener(type: string, listener: Function, useCapture: boolean, priority: number, useWeakReference: boolean): void

    public dispatchEvent(event: Event): boolean

    public hasEventListener(type: string): boolean

    public removeEventListener(type: string, listener: Function, useCapture: boolean): void

    public willTrigger(type: string): boolean
  
  }
}

export type { AST_EventDispatcher }