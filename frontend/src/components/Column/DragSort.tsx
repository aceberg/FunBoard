import { For } from "solid-js"
import { useDragAndDrop } from "@formkit/drag-and-drop/solid";
import { apiBoardGetByID, apiCardEdit } from "../../utils/api";
import { Card, curBoard, setCurBoard } from "../../utils/exports";
import OneCard from "../Card/OneCard";
import { sortCards } from "../../utils/sort";
import { state } from "@formkit/drag-and-drop";


export default function DragSort(_props: any) {

  let cards = sortCards([..._props.col.Cards]);
  let editTrigger = false;
  let getBoardTrigger = false;

  const [backList, backs] = useDragAndDrop<HTMLDivElement, Card>(
    cards,
    { 
      group: "todoList",
      onSort: () => {
        editTrigger = true;
        // console.log("Sort:", _props.col.Name);
      },
      onTransfer: () => {
        if (cards.length > _props.col.Cards.length) {      
          editTrigger = true;
          // console.log("Tr:", _props.col.Name);
        }
      },
    });

  const onDragEnded = () => {
    if (editTrigger) {
      updateCards();
    }
    editTrigger = false;
  }

  state.on("dragEnded", onDragEnded);

  const updateCards = async () => {
    for (let i=0; i< cards.length; i++) {
      let card = { ...cards[i]};
      card.Sort = i;
      card.ColumnID = _props.col.ID;

      if ((card.Sort !== cards[i].Sort) || (card.ColumnID !== cards[i].ColumnID)) {
        // console.log("Edited", card.Name);
        getBoardTrigger = true;
        await apiCardEdit(card);
      }
    }
    if (getBoardTrigger) {
      getBoardTrigger = false;
      // console.log("API get");
      setTimeout(async () => {
        setCurBoard(await apiBoardGetByID(curBoard.ID));
      }, 500); // 0.5 second
    }
  }

  return (
    <div ref={backList} class="h-full overflow-auto">
    <For each={backs()}>
      {(back) => <OneCard card={back}></OneCard>}
    </For>
    </div>
  )
}
