import { createSignal } from "solid-js";

import ModalCard from "./ModalCard";
import { emptyCard } from "../../utils/empty";

export default function AddCard(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const handleAdd = () => {
    setIsOpen(true);
  }

  return (
    <>
      <ModalCard 
        isOpen={isOpen()}
        setIsOpen={setIsOpen}
        card={emptyCard}
        id={_props.id}
      ></ModalCard>

      <button
        onClick={handleAdd} title="Add Card"> 
        <i class="bi bi-plus-circle-dotted icon-btn"></i>
      </button>
    </>    
  )
}

