import Table from "../components/Table/Table"
import TableConf from "../components/Table/Config/TableConf"
import Header from "./Header"
import { useParams } from "@solidjs/router";
import { curBoard, setCurBoard } from "../utils/store";
import { apiBoardGetByID } from "../utils/api";
import { setShowBoardConf, showBoardConf } from "../utils/signals";
import { createEffect } from "solid-js";
import { setupCardTheme } from "../utils/theme-card";


export default function Main() {

  const params = useParams();

  return (
    <>
    <div class='flex flex-col h-screen'>
      <Header></Header>
      <ChangeBoard id={params.id}></ChangeBoard>
    </div>
    </>
  )
}

function ChangeBoard(_props: any) {

  createEffect(async ()=>{
    setCurBoard(await apiBoardGetByID(_props.id));
    document.title = curBoard.Name + " - FunBoard";
    setupCardTheme(curBoard.CardTheme);
    setShowBoardConf(false);
  }, _props.id);

  return (
    <>
    {showBoardConf()
      ? <TableConf></TableConf>
      : <Table></Table>
    }
    </>
  )
}