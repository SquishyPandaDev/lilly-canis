// npm modules
import WebSocket        from "ws"

// our modules

// library
import { ComponentTag }   from "library/componentTag"
import * as Log           from "library/log"
import FillTemplateString from "library/fillTemplateString"

// web socket
import * as WSDo      from "webSocket/do/@all"
import * as WSMessage from "webSocket/message"

var webSocketServer:WebSocket.Server | null = null;

export default function(port:number) {
  if(webSocketServer != null) return;

  webSocketServer = new WebSocket.Server({
    port
  });

  Log.Info(
    ComponentTag.WEB_SOCKET,
    FillTemplateString(
      WSMessage.SERVER_STARTED,
      {
        PORT: port,
      }
    )
  )

  webSocketServer.on(
    "connection",
    WSDo.Connection
  )
}
