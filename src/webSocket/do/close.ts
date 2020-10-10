// our modules

// library
import FillComponentTag from "library/fillTemplateString"
import * as Log         from "library/log"

// websocket
import WSClientList   from "webSocket/clientList"
import WSComponentTag from "webSocket/ourComponentTag"
import * as WSMessage from "webSocket/message"

export default function(uuid:string) {
  Log.Info(
    WSComponentTag,
    FillComponentTag(
      WSMessage.CLIENT_DISCONNECTED,
      {
        UUID: uuid,
      }
    )
  )

  delete WSClientList[uuid]
}
