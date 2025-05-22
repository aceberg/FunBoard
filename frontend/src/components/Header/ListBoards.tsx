import { createSignal, For } from "solid-js";
import { BoardInfo } from "../../utils/exports";
import { apiBoardGetAll, apiBoardGetByID } from "../../utils/api";
import { setCurBoard } from "../../utils/store";
import Dropdown from "../All/Dropdown";


export default function ListBoards() {

  const [boards, setBoards] = createSignal<BoardInfo[]>([]);

  const handleBoards = async () => {
    setBoards(await apiBoardGetAll());
  }

  const handleLoadBoard = async (id: number) => {
    setCurBoard(await apiBoardGetByID(id));
  }

  return (
    <div class="p-1">
      <Dropdown label={<i class="bi bi-list" onClick={handleBoards}></i>}
        class="ml-2 text-gray-500 hover:text-gray-700">
        <For each={boards()}>
          {(board) => <div class="dd" onClick={() => handleLoadBoard(board.ID)}>{board.Name}</div>}
        </For>
      </Dropdown>
    </div>
  )
}
