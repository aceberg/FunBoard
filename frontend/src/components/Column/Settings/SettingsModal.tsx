import { createSignal } from "solid-js";
import Modal from "../../All/Modal";
import EditProps from "./EditProps";

export default function SettingsModal(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const cardTheme = "card bg-bg1";

  return (<>
    <Modal
      isOpen={isOpen()}
      body={<div class="p-1">
        <div class="font-bold p-1">Column settings</div>
        <hr></hr>
        <EditProps conf={_props.col.Props} id={_props.col.ID}></EditProps>
      </div>
      }
      modalClass={cardTheme}
      onClose={closeModal}
    ></Modal>
      <button 
        class="ml-2 text-gray-500 hover:text-gray-700" 
        onClick={() => setIsOpen(true)}>
        <i class="bi bi-three-dots"></i>
      </button>
  </>)
}