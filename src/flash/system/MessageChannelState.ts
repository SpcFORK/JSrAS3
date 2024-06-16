import './global'

export default class AS_MessageChannelState implements AST_MessageChannelState {
  /**
   * This state indicates that the message channel has been closed and doesn't have any more messages to deliver.
   */
  static CLOSED: "closed";
  /**
   * This state indicates that the message channel has been instructed to close and is in the process of delivering the remaining messages on the channel.
   */
  static CLOSING: "closing";
  /**
   * This state indicates that the message channel is open and available
   * for use.
   */
  static OPEN: "open";
}