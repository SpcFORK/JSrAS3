import './global'

import AS_MessageChannelState from "./MessageChannelState";

export class AS_MessageChannel extends AST_MessageChannel implements AST_EventDispatcher {
  #state: AS_MessageChannelState | undefined;
  #buffer: ArrayBuffer | undefined;
  #view: DataView | undefined;
  #byteOffset: number | undefined;
  #byteLength: number | undefined;
  #isClosed: boolean | undefined;

  constructor(buffer: ArrayBuffer, byteOffset: number, byteLength: number) {
    super();
    this.#initializeChannel(buffer, byteOffset, byteLength);
  }

  #initializeChannel(buffer: ArrayBuffer, byteOffset: number, byteLength: number): void {
    this.#state = AS_MessageChannelState.OPEN;
    this.#buffer = buffer;
    this.#view = new DataView(buffer, byteOffset, byteLength);
    this.#byteOffset = byteOffset;
    this.#byteLength = byteLength;
    this.#isClosed = false;
  }

  get state() {
    return this.#state;
  }

  get buffer() {
    return this.#buffer;
  }

  get view() {
    return this.#view;
  }

  get byteOffset() {
    return this.#byteOffset;
  }

  get byteLength() {
    return this.#byteLength;
  }

  get isClosed() {
    return this.#isClosed;
  }
}