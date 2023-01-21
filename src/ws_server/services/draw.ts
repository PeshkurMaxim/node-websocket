import { mouse, left, up, down, right, Point, Button, straightTo, screen } from "@nut-tree/nut-js";

export const draw_circle = async (pixels: number) => {
    const start = await mouse.getPosition();
    const center = new Point(start.x, start.y + pixels);
    const step = 0.01;

    const sw = await screen.width();
    const sh = await screen.height();
    
    if (
        center.x + pixels > sw ||
        center.x - pixels < 0 ||
        center.y + pixels > sh ||
        center.x - pixels < 0
    ) {
        return "Out\xa0of\xa0range";
    }

    await mouse.pressButton(Button.LEFT);

    for (let radius = 0; radius <= Math.PI * 2; radius += step) {
        const y = pixels * Math.cos(radius);
        const x = pixels * Math.sin(radius);
        await mouse.move(straightTo(new Point(center.x + x, center.y - y)));
    }

    await mouse.releaseButton(Button.LEFT);
}

export const draw_square = async (pixels: number) => {
    await drawRectangle(pixels, pixels);
}

export const draw_rectangle = async (pixelsX: number, pixelsY: number) => {
    await drawRectangle(pixelsX, pixelsY);
}

const drawRectangle = async (x: number, y: number) => {
    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(x));
    await mouse.move(down(y));
    await mouse.move(left(x));
    await mouse.move(up(y));

    await mouse.releaseButton(Button.LEFT);
}



