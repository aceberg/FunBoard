import { createSignal, For } from "solid-js"
import Card from "./Card"
import { useDragAndDrop } from "@formkit/drag-and-drop/solid";

function Column(_props: any) {

  const [fold, setFold] = createSignal<boolean>(_props.col.Fold);

  const [backList, backs] = useDragAndDrop<HTMLDivElement, string>(
    _props.col.Cards,
    { 
      group: "todoList",
      onTransfer: () => {
        console.log("Tr "+_props.col.Name+": "+_props.col.Cards.join(", "));
        // api call to save
      },
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
        <div class="border-b border-out text-center p-2 flex-none" onClick={handleFold}>
          <span class="font-bold pr-3">{_props.col.Name}</span>
          <span class="text-sm font-light">{_props.col.Cards.length}</span>
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
