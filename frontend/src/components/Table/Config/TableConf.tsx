import { createSignal } from "solid-js";
import { curBoard, setCurBoard } from "../../../utils/store";
import { apiBoardEdit } from "../../../utils/api";
import ColumnsConf from "./ColumnsConf";

export default function TableConf() {

  const [name, setName] = createSignal(curBoard.Name);

  const saveName = async () => {
    setCurBoard("Name", name());
    await apiBoardEdit(curBoard);
  };

  return (
    <div class="text-text2 p-6">
      <div class="flex">
        <input type="text" value={name()}
          onInput={(e) => setName(e.currentTarget.value)}></input>
        <button class="border p-1" onClick={saveName}>Save</button>
      </div>
      <ColumnsConf></ColumnsConf>
    </div>
  )
}

