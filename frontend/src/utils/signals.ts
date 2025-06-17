import { createSignal } from "solid-js";
import { themeCardNormal } from "./themes/card-normal";

export const [showBoardConf, setShowBoardConf] = createSignal(false);

export const [curCardTheme, setCurCardTheme] = createSignal(themeCardNormal);