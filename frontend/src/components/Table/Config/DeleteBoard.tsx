
import { curBoard } from "../../../utils/store";
import { apiBoardDel } from "../../../utils/api";
import { useNavigate } from "@solidjs/router";

export default function DeleteBoard() {

  const navigate = useNavigate();

  const handleDel = async () => {
    
    await apiBoardDel(curBoard.ID);

    navigate("/");
  };

  return (
    <div>
      <h1 class="font-semibold text-text2 mt-4">Delete Board</h1>
      <button class="text-btn mt-2" onClick={handleDel}>Delete</button>
    </div>
  )
}