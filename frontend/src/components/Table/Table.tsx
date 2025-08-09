import { For } from "solid-js";
import { curBoard } from "../../utils/store";
import OneColumn from "../Column/OneColumn";

function Table() {

  return (
    <div class="p-1 flex-1 h-full overflow-x-hidden">
      <div class="h-full min-w-full text-text2 flex flex-row border-3 border-out">
        <For each={[...curBoard.Columns].sort((a, b) => a.Sort - b.Sort)}>
          {(col) => <OneColumn col={col}></OneColumn>}
        </For>
      </div>
    </div>
  )
}

export default Table