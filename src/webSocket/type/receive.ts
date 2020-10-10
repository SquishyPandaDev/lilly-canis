// local modules
import { CommandName as WSCommandName } from "./commandName";

export interface Receive {
  clientId: string
  command : WSCommandName
  data?   : object

  /**
   * Allows a client to provide meta information for error
   * messages
   */
  meta?: object
}
