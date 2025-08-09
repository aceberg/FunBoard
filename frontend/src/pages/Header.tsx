import AddBoard from "../components/Header/AddBoard"
import { curBoard } from "../utils/store"
import ListBoards from "../components/Header/ListBoards";
import Login from "../components/Header/Login";
import { setShowBoardConf, showBoardConf } from "../utils/signals";
import ConfMenu from "../components/Header/ConfMenu";
import GoHome from "../components/Header/GoHome";

function Header() {

  const handleBoardConf = () => {
    setShowBoardConf(!showBoardConf());
  }

  return (
    <>
      <div class="flex">
        <ListBoards></ListBoards>
        <div class='text-text1 text-lg px-2 p-1'>{curBoard.Name}</div>
        <i class="bi bi-pencil icon-btn" onClick={handleBoardConf} title="Edit Board"></i>
        <AddBoard></AddBoard>
        <div class="ml-auto flex">
          <GoHome></GoHome>
          <Login></Login>
          <ConfMenu></ConfMenu>
        </div>
      </div>
    </>
  )
}

export default Header
