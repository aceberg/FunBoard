// export const defaultThemes = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink"];

import { curCardTheme, setCurCardTheme } from "./signals";
import { themeCardDark } from "./themes/card-dark";
import { themeCardLight } from "./themes/card-light";
import { themeCardNormal } from "./themes/card-normal";

export function getCardClass(color: keyof typeof themeCardNormal) {
    
    const c = curCardTheme()[color] ?? themeCardNormal.blue; // fallback
    
    return `border py-1 rounded ${c.bg} ${c.border} ${c.text}`;
};

export function setupCardTheme(color: string) {

    switch (color) {
        case "light":
            setCurCardTheme(themeCardLight);
            break;
        case "dark":
            setCurCardTheme(themeCardDark);
            break;
        default:
            setCurCardTheme(themeCardNormal);
    }
}