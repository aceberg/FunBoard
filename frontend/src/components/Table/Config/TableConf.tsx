import { createSignal } from "solid-js";
import { curBoard, setCurBoard } from "../../../utils/store";
import { apiBoardEdit } from "../../../utils/api";
import ColumnsConf from "./ColumnsConf";
import TableTheme from "./TableTheme";
import DeleteBoard from "./DeleteBoard";

export default function TableConf() {

  const [name, setName] = createSignal(curBoard.Name);

  const saveName = async () => {
    setCurBoard("Name", name());
    await apiBoardEdit(curBoard);
  };

  return (
    <div class="p-6">
      <h1 class="font-semibold text-text2">Board Name</h1>
      <div class="flex gap-4">
        <input type="text" value={name()} class="my-input"
          onInput={(e) => setName(e.currentTarget.value)}></input>
        <button class="text-btn" onClick={saveName}>Save</button>
      </div>
      <TableTheme></TableTheme>
      <ColumnsConf></ColumnsConf>
      <DeleteBoard></DeleteBoard>
    </div>
  )
}

