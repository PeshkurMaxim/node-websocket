import { Writable } from "stream";
import * as drawEvents from "../services/draw";
import * as mouseEvents from "../services/mouse";

export const Router = async (message: String, response: Writable) => {
    const cmd = message.toString().split(" ");
    let result = null;
    
    if (isMouseEvent(cmd[0])) {
        result = await mouseEvents[cmd[0]](+cmd[1]);
    }

    if (isDrawEvent(cmd[0])) {
        result = await drawEvents[cmd[0]](+cmd[1], +cmd[2]);
    }

    if (!result)
        result = cmd[0];

    response.write(result);
    
    // ["prnt_scrn"]
}

function isMouseEvent(str: String): str is MouseEvents {
    for (const key in MouseEvents) {
        if (key == str) {
            return true;
        }
    }

    return false;
}

function isDrawEvent(str: String): str is DrawEvents {
    for (const key in DrawEvents) {
        if (key == str) {
            return true;
        }
    }

    return false;
}

enum MouseEvents {
    mouse_up = "mouse_up",
    mouse_down = "mouse_down",
    mouse_left = "mouse_left",
    mouse_right = "mouse_right",
    mouse_position = "mouse_position"
}

enum DrawEvents {
    draw_square = "draw_square",
    draw_rectangle = "draw_rectangle",
    draw_circle = "draw_circle"
}
