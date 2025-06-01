import Table from "../components/Table/Table"
import TableConf from "../components/Table/TableConf"
import { showBoardConf } from "../utils/exports"


function Main() {

  return (
    <>
      {showBoardConf()
        ? <TableConf></TableConf>
        : <Table></Table>
      }
    </>
  )
}

export default Main
