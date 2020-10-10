// our modules

// web socket
import { SendKind as WSSendKind } from "webSocket/sendKind"

// local modules
import SendBase from "./base"

class UUID extends SendBase {
  constructor(uuid:string) {
    super(WSSendKind.UUID)

    this._uuid = uuid
  }

  public ToJSON() {
    const ourObj = {
      uuid: this._uuid,
    }

    return super.GetJSONString(ourObj)
  }

  private _uuid:string
}

export default function(uuid:string) {
  return new UUID(uuid).ToJSON();
}
