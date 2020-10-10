// npm modules
import WebSocket        from "ws"
import { v4 as uuidv4 } from "uuid"

// our modules

// library
import FillTemplateString from "library/fillTemplateString"
import * as Log           from "library/log"

// web socket
import WSComponentTag from "webSocket/ourComponentTag"
import WSClientList   from "webSocket/clientList"
import * as WSMessage from "webSocket/message"
import * as WSSend    from "webSocket/send/@all"

// local modules
import DoClose   from "./close"
import DoMessage from "./message"

export default function(webSocket:WebSocket) {
  const uuid = uuidv4();

  WSClientList[uuid] = {
    id: uuid,
    webSocket,
    isReadyForEvents: false,
  }

  webSocket.send(
    WSSend.UUID(uuid)
  )

  Log.Info(
    WSComponentTag,
    FillTemplateString(
      WSMessage.CLIENT_CONNECTED,
      {
        UUID: uuid,
      },
    )
  )

  webSocket.on(
    "message",
    (message) => {
      DoMessage(uuid, webSocket, message)
    }
  )

  webSocket.on(
    "close",
    () => {
      DoClose(uuid)
    },
  )
}
