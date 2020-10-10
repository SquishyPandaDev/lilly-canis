// our modules

// library
import FillTemplateString from "library/fillTemplateString"

// web socket
import * as WSMessage from "webSocket/message"
import * as WSType    from "webSocket/type/@all"

import { CommandList as WSCommandList } from "webSocket/commandList"

// local modules
import ReadyForEvents       from "./readyForEvents"
import StreamConnectedUsers from "./streamConnectedUsers"


export default [
  ReadyForEvents,
  StreamConnectedUsers,
].reduce(
  (obj, commandHandler) => {
    const commandName =
      WSCommandList[commandHandler.command] as WSType.CommandName

    if(obj[commandName] !== undefined) {
      throw Error(
        FillTemplateString(
          WSMessage.COMMAND_HANDLER_DUPLICATE,
          {
            COMMAND_NAME: commandName,
          },
        )
      )
    }

    obj[commandName] = commandHandler

    return obj
  },
  {} as { [k in WSType.CommandName]: WSType.CommandHandler }
)
