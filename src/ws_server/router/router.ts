import { Writable } from "stream";
import { isMouseEvent, isDrawEvent, isScreenEvent } from "./helpers";
import * as drawEvents from "../services/draw";
import * as mouseEvents from "../services/mouse";
import * as screenEvents from "../services/screen";

export const router = async (message: String, response: Writable) => {
    const cmd = message.toString().split(" ");
    let result = null;    
    
    if (isMouseEvent(cmd[0])) {
        result = await mouseEvents[cmd[0]](+cmd[1]);
    }

    if (isDrawEvent(cmd[0])) {
        result = await drawEvents[cmd[0]](+cmd[1], +cmd[2]);
    }

    if (isScreenEvent(cmd[0])) {
        result = await screenEvents[cmd[0]]();
    }

    if (!result) {
        result = cmd[0].replace('_', '\xa0');

        if (cmd[1]) 
            result += '\xa0' + cmd[1] + 'px';

        if (cmd[2])
            result += ',\xa0' + cmd[2] + 'px';
    }
    
    response.write(result);
}
