import AddBoard from "../components/Header/AddBoard"
import { curBoard } from "../utils/store"
import ListBoards from "../components/Header/ListBoards";

function Header() {

  return (
    <>
      <div class="flex">
        <ListBoards></ListBoards>
        <div class='text-text1 text-lg px-4'>{curBoard.Name}</div>
        <AddBoard></AddBoard>
      </div>
    </>
  )
}

export default Header
