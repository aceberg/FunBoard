import { createSignal } from "solid-js";

import ModalCard from "./ModalCard";
import { emptyCard } from "../../utils/exports";


function AddCard(_props: any) {

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
        class="ml-2 text-gray-500 hover:text-gray-700" 
        onClick={handleAdd}>
        +
      </button>
    </>    
  )
}

export default AddCard
