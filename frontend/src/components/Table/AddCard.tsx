import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { apiBoardGetByID, apiCardEdit } from "../../utils/api";
import { curBoard, emptyCard, setCurBoard } from "../../utils/exports";


function AddCard(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const [cardName, setCardName] = createSignal("");

  const closeModal = async () => {
    setIsOpen(false);

    if ("" !== cardName()) {
      
      let card = emptyCard;
      card.ColumnID = _props.id;
      card.Name = cardName();
      
      console.log("Add Card:", card);
      await apiCardEdit(card);
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
  };

  const cardClass = "bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded"

  const handleAdd = () => {
    setIsOpen(true);
  }

  return (
    <>
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
      <button 
        class="ml-2 text-gray-500 hover:text-gray-700" 
        onClick={handleAdd}>
        +
      </button>
    </>    
  )
}

export default AddCard
