import { createSignal, For } from "solid-js"
import Card from "./Card"
import { useDragAndDrop } from "@formkit/drag-and-drop/solid";
import { apiBoardGetByID, apiCardEdit } from "../../utils/api";
import { curBoard, setCurBoard } from "../../utils/exports";
import AddCard from "./AddCard";

function Column(_props: any) {

  const [fold, setFold] = createSignal<boolean>(_props.col.Fold);

  const [backList, backs] = useDragAndDrop<HTMLDivElement, HTMLDivElement>(
    _props.col.Cards,
    { 
      group: "todoList",
      onTransfer: async () => {
        
        for (let i=0; i< _props.col.Cards.length; i++) {
          if (_props.col.Cards[i].ColumnID !== _props.col.ID) {
          
            let card = { ..._props.col.Cards[i]};
            card.ColumnID = _props.col.ID;

            await apiCardEdit(card);
            setCurBoard(await apiBoardGetByID(curBoard.ID));
          }
        }

      },
      // onSort: () => {
      //   console.log("Sort "+_props.col.Name+": "+_props.col.Cards.join(", "));
      // },
    });

  const handleFold = () => {
    console.log("Fold "+_props.col.Name);
    setFold(!fold());
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
        </>
        : <>
        <div class="border-b border-out p-2 flex items-center justify-between">
          <div class="text-center flex-1" onClick={handleFold}>
            <span class="font-bold pr-3">{_props.col.Name}</span>
            <span class="text-sm font-light">{_props.col.Cards.length}</span>
          </div>
          
          <AddCard id={_props.col.ID}></AddCard>
        </div>

        <div ref={backList} class="h-full overflow-auto">
        <For each={backs()}>
          {(back) => <Card item={back}></Card>}
        </For>
        </div>
        </>
        }
      </div>
    </div>
  )
}

export default Column
