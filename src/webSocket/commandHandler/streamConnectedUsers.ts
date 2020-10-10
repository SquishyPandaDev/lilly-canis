// our modules

// library
import * as Const from "library/const"
import Timeout    from "library/timeout"

// discord
import DiscordClient from "discord/client"

// websocket
import WSClientList from "webSocket/clientList"
import * as WSSend  from "webSocket/send/@all"
import * as WSType  from "webSocket/type/@all"

import { CommandList as WSCommandList } from "webSocket/commandList"

const SEND_TIMEOUT = 50;

export default {
  command: WSCommandList.STREAM_CONNECTED_USERS,
  async handler(uuid) {
    const guild = await DiscordClient
      .guilds
      .fetch(Const.DISCORD_GUID)

    const memberCollection = await guild
      .members
      .fetch()

    let timeout = Timeout(SEND_TIMEOUT);

    for(const member of memberCollection.array()) {
      const shouldIgnore =
        member.user.presence.status === "offline"
         || member.user.id === DiscordClient.user?.id

      if(shouldIgnore) continue;

      await timeout;

      if(WSClientList[uuid] === undefined) {
        // client left mid stream
        break;
      }

      WSClientList[uuid].webSocket.send(
        WSSend.StreamedConnectedUser(member),
      )

      timeout = Timeout(SEND_TIMEOUT);
    }
  }
} as WSType.CommandHandler
