import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";

const IMG_SIZE = 200;

export const prnt_scrn = async () => {
    const center = await mouse.getPosition();
    
    try {
        const region = new Region(Math.max(0, center.x - IMG_SIZE / 2), Math.max(0, center.y - IMG_SIZE / 2), IMG_SIZE, IMG_SIZE);
        
        const sw = await screen.width();
        const sh = await screen.height();
        
        if (region.left + region.width > sw || region.top + region.height > sh) {
            return "Out\xa0of\xa0range";
        }
        
        const screenRegion = await screen.grabRegion(region);
        const screenRegionRGB = await screenRegion.toRGB();
        const image = new Jimp({ data: screenRegionRGB.data, width: screenRegion.width, height: screenRegion.height });
        const imageBuffer = await image.getBufferAsync(image.getMIME());
        
        return "prnt_scrn " + imageBuffer.toString("base64");
    } catch (err) {
        return "prnt_scrn\xa0failed";
    }
}