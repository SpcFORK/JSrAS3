export interface AS_EventListener {
  priority: number;
  listener: Function | WeakRef<Function>;
  useCapture: boolean;
}
