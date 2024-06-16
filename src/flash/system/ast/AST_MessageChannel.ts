import { IEventDispatcher } from '../../events/IEventDispatcher';

declare global {

  /**
   * The MessageChannel class provides a mechanism for a worker to communicate with another worker. A message channel is a one-way communication channel. The message channel's sending worker uses the message channel to send objects to the receiving worker. A MessageChannel object is the only way to send a message between workers that dispatches an event indicating to the receiver that the message is available. Other mechanisms for sharing data allow a value to be set but do not provide an event to notify you of the changed data.
   * 
   * Each MessageChannel object contains a queue of message objects sent from the sending worker to the receiving worker. Each call to send() adds an object to the queue. Each call to receive() retrieves the oldest message object from the queue.
   *
   * You do not create MessageChannel instances directly by calling the MessageChannel() constructor. To create a MessageChannel instance, call the createMessageChannel() method of the Worker object that will send messages on the channel, passing the receiving Worker object as an argument.
   *
   * The typical workflow for sending messages with a MessageChannel object is as follows:
   *
   * Call the sending worker's createMessageChannel() method to create the message channel
   *
   * ```as
   *   // In the sending worker swf
   *   var sendChannel:MessageChannel;
   *   sendChannel = Worker.current.createMessageChannel(receivingWorker);
   * ```
   *
   * Pass the message channel to the other worker, either by calling Worker.setSharedProperty() or by sending it through an existing message channel
   *
   * ```as
   *   receivingWorker.setSharedProperty("incomingChannel", sendChannel);
   * ```
   *
   * Code in the receiving worker registers a listener with the MessageChannel object for the channelMessage event
   *
   * ```as
   *   // In the receiving worker swf
   *   var incomingChannel:MessageChannel;
   *   incomingChannel = Worker.current.getSharedProperty("incomingChannel");
   *   incomingChannel.addEventListener(Event.CHANNEL_MESSAGE, handleIncomingMessage);
   * ```
   *
   * Code in the sending worker sends a message by calling the send() method
   *
   * ```as
   *   // In the sending worker swf
   *   sendChannel.send("This is a message");
   *
   * The runtime calls the event handler in the receiving worker code, indicating that a message has been sent
   * ```
   *
   * ```as
   *   // In the receiving worker swf
   *   // This method is called when the message channel gets a message
   *   private function handleIncomingMessage(event:Event):void
   *   {
   *     // Do something with the message, as shown in the next code listing
   *   }
   * ```
   *
   * Code in the receiving worker calls the receive() method to get the message. The object returned by the receive() method has the same data type as the object passed to the send() method.
   *
   * ```as
   * var message:String = incomingChannel.receive() as String;
   * ```
   *
   * In addition to the asynchronous workflow outlined above, you can use an alternative workflow with the receive() method to pause the code in the receiving worker and wait until a message is sent. See the receive() method description for more information.
   *
   * The MessageChannel class is one of the special object types that are shared between workers rather than copied between them. When you pass a message channel from one worker to another worker either by calling the Worker object's setSharedProperty() method or by using a MessageChannel object, both workers have a reference to the same MessageChannel object in the runtime's memory.
   */
  class AST_MessageChannel implements EventDispatcher {

    /** messageAvailable:Boolean  [read-only]
     *
     * [read-only] Indicates whether the MessageChannel has one or more messages from the sending worker in its internal message queue.
     */
    static readonly messageAvailable: boolean;
    static #messageAvailable: boolean;

    /** state : String
     *
     * [read-only] Indicates the current state of the MessageChannel object (open, closing, or closed).
     */
    static readonly state: string;
    static #state: string;

    #evMap: Map<string, Event>;


    close(): void

    receive(blockUntilReceived: boolean): any

    removeEventListener(type: string, listener: Function, useCapture: boolean): void

    send(arg: any, queueLimit: number): void

    toString(): string

    /**
     * channelMessage
     * Dispatched each time the sending worker calls this MessageChannel object's send() method, indicating that a new message object is available in the MessageChannel instance's queue.
     */
    static readonly channelMessage: CustomEvent;

    /**
     * channelMessageError
     * Dispatched each time the sending worker calls this MessageChannel object's send() method, indicating that an error has occurred.
     */
    static readonly channelMessageError: CustomEvent;
  }

}

export { AST_MessageChannel }