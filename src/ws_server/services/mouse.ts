import { mouse, left, up, down, right } from "@nut-tree/nut-js";

export const mouse_up = async (pixels: number) => {
    await mouse.move(up(pixels));
}

export const mouse_left = async (pixels: number) => {
    await mouse.move(left(pixels));
}

export const mouse_down = async (pixels: number) => {
    await mouse.move(down(pixels));
}

export const mouse_right = async (pixels: number) => {
    await mouse.move(right(pixels));
}

export const mouse_position = async (pixels: number) => {
    // await mouse.move(right(pixels));
}

