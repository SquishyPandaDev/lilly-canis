import WebSocket from "ws"

export interface ClientInfo {
  id              : string
  webSocket       : WebSocket
  isReadyForEvents: boolean
}
