// node modules
import fs   from "fs"
import path from "path"

// our modules

// library
import * as DirPath from "library/dirPath"

// discord
import DiscordClient from "discord/client"

// web socket
import WSStartServer from "webSocket/startServer";

const DISCORD_TOKEN_PATH = path.join(
  DirPath.SECRET,
  "token.txt",
);

DiscordClient.login(
  fs
    .readFileSync(
      DISCORD_TOKEN_PATH,
      "utf8",
    )
    .trim()
)

WSStartServer(9000);
