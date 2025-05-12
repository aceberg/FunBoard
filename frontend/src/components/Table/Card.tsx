import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { apiBoardGetByID, apiCardDel, apiCardEdit } from "../../utils/api";
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
      await apiCardEdit(card);
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
  };

  const handleDel = async () => {
    await apiCardDel(_props.item.ID);
    setCurBoard(await apiBoardGetByID(curBoard.ID));
  };

  const cardClass = "card card-"+_props.item.Theme;

  return (<>
    <div class="p-1">
      <Modal
        isOpen={isOpen()}
        body={<>
          <input
          type="text" placeholder="Name" value={cardName()}
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onInput={handleInput}
          />
          <button class="p-2" onClick={handleDel}>Del</button>
          <p>Updated: {_props.item.DateUpdated}</p>
        </>
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