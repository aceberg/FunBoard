import { For } from "solid-js";
import { curBoard } from "../../../utils/store";

export default function ColumnsConf() {

  return (
    <div>
      <h1 class="font-semibold mt-4">Edit Columns</h1>
      <For each={[...curBoard.Columns].sort((a, b) => a.Sort - b.Sort)}>
        {(col) => <SortColumns col={col}></SortColumns>}
      </For>
    </div>
  )
}

function SortColumns(_props: any) {

  return (
    <>
      <div class="flex text-text1 gap-4">
        <input type="number" class="w-12" value={_props.col.Sort}></input>
        <input type="text" value={_props.col.Name}></input>
      </div>
    </>
  )
}