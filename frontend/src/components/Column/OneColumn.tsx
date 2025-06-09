import { createSignal } from "solid-js"
import { apiColumnEdit } from "../../utils/api";

import AddCard from "../Card/AddCard";
import DragSort from "./DragSort";
import SettingsModal from "./Settings/SettingsModal";


export default function OneColumn(_props: any) {

  const [fold, setFold] = createSignal<boolean>(_props.col.Fold);

  const handleFold = async () => {
    
    setFold(!fold());
    await apiColumnEdit({..._props.col, Fold: fold()});
  }

  return (
    // flex-1: for equal sise columns
    <div class={fold() ? "h-full w-fit" : "h-full flex-1"}> 
      <div class="h-full align-top border border-out flex flex-col">
        {fold()
        ? <>
        <div class="border-b border-out text-center p-2 flex-none" onClick={handleFold}>
          <span class="text-sm font-light px-1">{_props.col.Cards.length}</span>
        </div>
        <div class="h-full overflow-auto" onClick={handleFold}></div>
        </>
        : <>
        <div class="border-b border-out p-2 flex items-center justify-between">
          <AddCard id={_props.col.ID}></AddCard>

          <div class="text-center flex-1" onClick={handleFold} title="Fold Column">
            <span class="font-bold pr-3">{_props.col.Name}</span>
            <span class="text-sm font-light">{_props.col.Cards.length}</span>
          </div>
          
          <SettingsModal col={_props.col}></SettingsModal>
        </div>
          <DragSort col={_props.col}></DragSort>
        </>
        }
      </div>
    </div>
  )
}
