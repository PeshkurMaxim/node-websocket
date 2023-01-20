import * as mouseEvents from "../services/mouse";

export const Router = async (message: String) => {
    const cmd = message.toString().split(" ");
    console.log(cmd[0]);
    
    if (isMouseEvent(cmd[0])) {
        await mouseEvents[cmd[0]](+cmd[1]);
    }
    
    // ["draw_square", "draw_rectangle", "draw_circle"]
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

enum MouseEvents {
    mouse_up = "mouse_up",
    mouse_down = "mouse_down",
    mouse_left = "mouse_left",
    mouse_right = "mouse_right",
    mouse_position = "mouse_position"
}
