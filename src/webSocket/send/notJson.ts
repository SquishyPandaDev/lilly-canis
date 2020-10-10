// our modules

// web socket
import { SendKind as WSSendKind } from "webSocket/sendKind"

// local modules
import SendBase from "./base"

const TYPE = "NOT_JSON"

class NotJSON extends SendBase {
  constructor() {
    super(WSSendKind.NOT_JSON)
  }

  public ToJSON() {
    return JSON.stringify(super.GetBaseObject())
  }
}

export default function() {
  return new NotJSON().ToJSON();
}
