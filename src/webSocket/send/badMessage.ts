// our modules

// web socket
import { SendKind as WSSendKind } from "webSocket/sendKind"

// local modules
import SendBase from "./base"

class BadMessage extends SendBase {
  constructor(message:object, meta?:object) {
    super(WSSendKind.BAD_MESSAGE)

    this._message = message;
    this._meta    = meta;
  }

  public ToJSON() {
    const ourObj = {
      message: this._message,
      meta   : this._meta
    }

    return super.GetJSONString(ourObj);
  }

  private _message: object
  private _meta?  : object
}

export default function(message:object, meta?:object) {
  return new BadMessage(message, meta).ToJSON();
}
