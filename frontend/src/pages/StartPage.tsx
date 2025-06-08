import { createSignal, For } from "solid-js";
import { BoardInfo } from "../utils/models";
import { apiBoardGetAll } from "../utils/api";
import { useNavigate } from "@solidjs/router";

export default function StartPage() {

  const [boards, setBoards] = createSignal<BoardInfo[]>([]);
  const navigate = useNavigate();

  const handleLoadBoard = (id: number) => {
    navigate("/board/"+id);
  }

  const atStart = async () => {
    setBoards(await apiBoardGetAll());
  }
  atStart();

  return (
  <>
    <div>
      <For each={boards()}>
        {(board) => 
        <div class="dd" onClick={() => handleLoadBoard(board.ID)}>{board.Name}</div>
        }
      </For>
    </div>
  </>
  )
}
