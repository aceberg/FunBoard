import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { apiBoardGetByID, apiCardDel, apiCardEdit } from "../../utils/api";
import { curBoard, setCurBoard } from "../../utils/exports";

export default function ModalCard(_props: any) {

  const [cardName, setCardName] = createSignal(_props.card.Name);

  const closeModal = async () => {
    _props.setIsOpen(false);

    if (_props.card.Name !== cardName()) {
      
      let card = {..._props.card};
      card.Name = cardName();
      card.ColumnID = _props.id;
      
      console.log("Edit Card:", card);
      await apiCardEdit(card);
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
  };

  const handleDel = async () => {
    await apiCardDel(_props.card.ID);
    setCurBoard(await apiBoardGetByID(curBoard.ID));
  };

  const cardClass = "card card-"+_props.card.Theme;

  return (<>
    <Modal
      isOpen={_props.isOpen}
      body={<>
        <input
        type="text" placeholder="Name" value={cardName()}
        class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onInput={handleInput}
        />
        <button class="p-2" onClick={handleDel}>Del</button>
        <p>Moved: {_props.card.DateMoved}</p>
      </>
      }
      modalClass={cardClass}
      onClose={closeModal}
    ></Modal>
  </>)
}