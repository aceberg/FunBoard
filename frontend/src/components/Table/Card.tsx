import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { apiBoardGetByID, apiCardEdit } from "../../utils/api";
import { curBoard, setCurBoard } from "../../utils/exports";

export default function Card(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const [cardName, setCardName] = createSignal(_props.item.Name);

  const closeModal = async () => {
    setIsOpen(false);

    if (_props.item.Name !== cardName()) {
      
      let card = {..._props.item};
      card.Name = cardName();
      
      console.log("Edit Card:", card);
      apiCardEdit(card);
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
  };

  const cardClass = "bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded"

  return (<>
    <div class="p-1">
      <Modal
        isOpen={isOpen()}
        body={
        <input
          type="text" placeholder="Name" value={cardName()}
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onInput={handleInput}
        />
        }
        modalClass={cardClass}
        onClose={closeModal}
      ></Modal>
      <div class={cardClass} onClick={() => setIsOpen(true)}>
        <div>{cardName()}</div>
      </div>
    </div>
  </>)
}