import { httpServer } from "./http_server/index";
import { mouse } from "@nut-tree/nut-js";
import { createWSServer } from "./ws_server/index"

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
createWSServer(WSS_PORT);
