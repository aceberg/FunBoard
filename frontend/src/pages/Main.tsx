import Table from "../components/Table/Table"
import TableConf from "../components/Table/Config/TableConf"
import Header from "./Header"
import { useParams } from "@solidjs/router";
import { setCurBoard } from "../utils/store";
import { apiBoardGetByID } from "../utils/api";
import { showBoardConf } from "../utils/signals";
import { createEffect } from "solid-js";


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