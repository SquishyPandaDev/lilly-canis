// npm modules
import colors    from "colors/safe"
import WebSocket from "ws"

// our modules

// library
import * as Log           from "library/log"
import FillTemplateString from "library/fillTemplateString"

// websocket
import WSComponentTag    from "webSocket/ourComponentTag"
import WSCommandHandlers from "webSocket/commandHandler/@all"
import * as WSMessage    from "webSocket/message"
import * as WSSend       from "webSocket/send/@all"
import WSVerifyReceive   from "webSocket/verifyReceive"

export default function(
  uuid     : string,
  webSocket: WebSocket,
  message  : WebSocket.Data,
) {
  var parsedMessage:object;

  //#region Try JSON parse
  try {
    parsedMessage = JSON.parse(message.toString())
  } catch(e) {
    webSocket.send(WSSend.NotJSON())

    Log.Error(
      WSComponentTag,
      FillTemplateString(
        WSMessage.MESSAGE_NOT_JSON,
        {
          UUID: uuid
        },
      ) + `\n${
        colors.stripColors(message.toString())
      }`,
    )

    return
  }
  //#endregion

  if(WSVerifyReceive(parsedMessage)) {
    Log.Info(
      WSComponentTag,
      FillTemplateString(
        WSMessage.MESSAGE_RECEIVED,
        {
          UUID: uuid
        }
      ) + `\n\n${
        colors.white(JSON.stringify(parsedMessage, null, 2))
      }\n`,
    )

    WSCommandHandlers[parsedMessage.command].handler(uuid, parsedMessage)
  } else {
    webSocket.send(
      WSSend.BadMessage(
        parsedMessage,
        // @ts-ignore
        parsedMessage["meta"],
      )
    )

    Log.Error(
      WSComponentTag,
      FillTemplateString(
        WSMessage.MESSAGE_NOT_VALID,
        {
          UUID: uuid,
        }
      )
        + `\n\n${
          colors.white(JSON.stringify(parsedMessage, null, 2))
        }\n`,
    )
  }
}
