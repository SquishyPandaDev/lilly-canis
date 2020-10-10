// npm modules
import Discord from "discord.js"

// our modules

// web socket
import { SendKind as WSSendKind } from "webSocket/sendKind"

// local modules
import SendBase from "./base"

class StreamedConnectedUser extends SendBase {
  constructor(member:Discord.GuildMember) {
    super(WSSendKind.STREAMED_CONNECTED_USER)

    this._id    = member.id;
    this._name  = member.displayName
    this._color = member.displayHexColor
  }

  public ToJSON() {
    const ourObj = {
      id   : this._id,
      name : this._name,
      color: this._color,
    }

    return super.GetJSONString(ourObj)
  }

  private _id   : string
  private _name : string
  private _color: string
}

export default function(member:Discord.GuildMember) {
  return new StreamedConnectedUser(member).ToJSON();
}
