// our modules

// web socket
import { CommandList as WSCommandList } from "webSocket/commandList";

// local modules
import { Receive as WSReceive } from "./receive";

export interface CommandHandler {
  command: WSCommandList,

  handler(uuid:string, message:WSReceive): void
}
