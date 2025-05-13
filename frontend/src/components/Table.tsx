import { For } from "solid-js";
import { curBoard } from "../utils/exports";
import OneColumn from "./Column/OneColumn";

function Table() {

  return (
    <>
      <div class="h-full min-w-full border border-out text-text2 flex flex-row">
        <For each={curBoard.Columns}>
          {(col) => <OneColumn col={col}></OneColumn>}
        </For>
      </div>
    </>
  )
}

export default Table