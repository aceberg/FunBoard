import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { Board } from "../../utils/exports";
import { apiBoardEdit } from "../../utils/api";


export default function AddBoard(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);
  const [boardName, setBoardName] = createSignal<string>("");
  
  const handleAdd = async () => {
    if (boardName() !== "") {
      const board:Board = {
        ID: 0,
        Name: boardName(),
        Columns: []
      };

      await apiBoardEdit(board);
    }
  }
  
  const handleInput = (e: Event) => {
    setBoardName((e.target as HTMLInputElement).value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const closeModal = () => {
    handleAdd();
    setIsOpen(false);
  }

  const cardTheme = "card bg-bg1 text-text2";

  return (<>
    <Modal
      isOpen={isOpen()}
      body={<div class="p-1">
        <input 
        value={boardName()}
        placeholder="New Board Name"
        class="border rounded px-2"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        ></input>
      </div>
      }
      modalClass={cardTheme}
      onClose={closeModal}
    ></Modal>
      
      <button class="ml-2 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(true)}>
          <i class="bi bi-plus-circle-dotted"></i>
      </button>
  </>)
}