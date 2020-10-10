// node modules
import fs   from "fs"
import path from "path"

// npm modules
import { JSONSchemaType } from "ajv"

// our modules

// library
import * as DirPath from "library/dirPath"
import AjvInstance  from "library/ajvInstance"

// websocket
import * as WSType from "webSocket/type/@all"


const PATH = path.join(
  DirPath.Schema.WEB_SOCKET,
  "receive.schema.json"
)

const SCHEMA:JSONSchemaType<WSType.Receive> = JSON.parse(
  fs.readFileSync(
    PATH,
    "utf8",
  ),
)

export default AjvInstance.compile(SCHEMA)
