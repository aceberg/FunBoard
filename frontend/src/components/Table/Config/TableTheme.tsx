import { createSignal } from "solid-js";
import { curBoard, setCurBoard } from "../../../utils/store";
import { apiBoardEdit } from "../../../utils/api";

export default function TableTheme() {

  const [boardTheme, setBoardTheme] = createSignal(curBoard.Theme);
  const [cardTheme, setCardTheme] = createSignal(curBoard.CardTheme);

  const saveBoardTheme = async () => {
    setCurBoard("Theme", boardTheme());
    await apiBoardEdit(curBoard);
  };
  
  const saveCardTheme = async () => {
    setCurBoard("CardTheme", cardTheme());
    await apiBoardEdit(curBoard);
  };

  return (
    <div>
      <h1 class="font-semibold text-text2">Board Theme</h1>
      <div class="flex gap-4">
        <input type="text" value={boardTheme()} class="my-input"
          onInput={(e) => setBoardTheme(e.currentTarget.value)}></input>
        <button class="text-btn" onClick={saveBoardTheme}>Save</button>
      </div>
      <h1 class="font-semibold text-text2">Card Theme</h1>
      <div class="flex gap-4">
        <input type="text" value={cardTheme()} class="my-input"
          onInput={(e) => setCardTheme(e.currentTarget.value)}></input>
        <button class="text-btn" onClick={saveCardTheme}>Save</button>
      </div>
    </div>
  )
}

