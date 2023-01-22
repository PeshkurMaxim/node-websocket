import { MouseEvents, DrawEvents, ScreenEvents } from "../types/enum";

export function isMouseEvent(str: String): str is MouseEvents {
    for (const key in MouseEvents) {
        if (key == str) {
            return true;
        }
    }

    return false;
}

export function isDrawEvent(str: String): str is DrawEvents {
    for (const key in DrawEvents) {
        if (key == str) {
            return true;
        }
    }

    return false;
}

export function isScreenEvent(str: String): str is ScreenEvents {
    for (const key in ScreenEvents) {
        if (key == str) {
            return true;
        }
    }

    return false;
}