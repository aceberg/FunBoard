import { createSignal, For } from "solid-js";
import { BoardInfo } from "../../utils/models";
import { apiBoardGetAll } from "../../utils/api";
import Dropdown from "../All/Dropdown";
import { useNavigate } from "@solidjs/router";


export default function ListBoards() {

  const [boards, setBoards] = createSignal<BoardInfo[]>([]);
  const navigate = useNavigate();

  const handleBoards = async () => {
    setBoards(await apiBoardGetAll());
  }

  const handleLoadBoard = (id: number) => {
    navigate("/board/"+id);
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
