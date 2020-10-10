// our modules

// websocket
import WSClientList from "webSocket/clientList"
import * as WSType  from "webSocket/type/@all"

import { CommandList as WSCommandList } from "webSocket/commandList"

export default {
  command: WSCommandList.READY_FOR_EVENTS,
  handler(uuid:string) {
    WSClientList[uuid].isReadyForEvents = true
  }
} as WSType.CommandHandler
