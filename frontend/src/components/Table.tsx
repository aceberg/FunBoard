import { For } from "solid-js";
import { curBoard } from "../utils/exports";
import Column from "./Table/Column";

function Table() {

  return (
    <>
      <div class="h-full min-w-full border border-out text-text2 flex flex-row">
        <For each={curBoard.Columns}>
          {(col) => <Column col={col}></Column>}
        </For>
      </div>
    </>
  )
}

export default Table