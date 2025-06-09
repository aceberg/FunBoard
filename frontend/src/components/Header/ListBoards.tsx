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
    <div class="p-1 ml-1">
      <Dropdown label={<i class="bi bi-list icon-btn" title="Boards" onClick={handleBoards}></i>}>
        <div class="dd-menu-back">
          <For each={boards()}>
            {(board) => <div class="dd-menu" onClick={() => handleLoadBoard(board.ID)}>{board.Name}</div>}
          </For>
        </div>
      </Dropdown>
    </div>
  )
}
