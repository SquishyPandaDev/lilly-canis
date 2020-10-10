// our modules

// library
import * as Get from "library/get/@all";

// web socket
import { SendKind as WSSendKind } from "webSocket/sendKind"


export default abstract class {
  public abstract ToJSON():string

  protected constructor(kind:WSSendKind) {
    this._kind      = WSSendKind[kind];
    this._timeStamp = Get.IsoDate();

  }

  protected GetJSONString(obj:object):string {
    return JSON.stringify(
      {
        ...this.GetBaseObject(),
        ...obj,
      }
    )
  }

  protected GetBaseObject():object {
    return {
      kind: this._kind,
      timeStamp: this._timeStamp,
    }
  }

  private _kind     : string
  private _timeStamp: string
}
