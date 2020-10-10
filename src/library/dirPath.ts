// node modules
import path from "path"

export const CWD = process.cwd()

export const DATA = path.join(
  CWD,
  "data",
)

export const SCHEMA = path.join(
  DATA,
  "schema",
)

export const SECRET = path.join(
  DATA,
  "secret",
)

export namespace Schema {
  export const WEB_SOCKET = path.join(
    SCHEMA,
    "webSocket",
  )
}
