import { createEffect, createSignal, For } from "solid-js";
import Modal from "../All/Modal";
import { getCardClass } from "../../utils/theme-card";
import Dropdown from "../All/Dropdown";
import Subtasks from "./Subtasks";
import { deleteCard, updateCard } from "../../utils/store";
import AddSubtask from "./AddSubtask";
import { curCardTheme } from "../../utils/signals";

export default function ModalCard(_props: any) {

  let textareaRef: HTMLTextAreaElement | undefined;

  const [cardName, setCardName] = createSignal(_props.card.Name);
  const [cardTheme, setCardTheme] = createSignal(_props.card.Theme);

  const closeModal = async () => {
    _props.setIsOpen(false);

    if ((_props.card.Name !== cardName()) || (_props.card.Theme !== cardTheme())) {
      
      let card = {..._props.card};
      card.Name = cardName();
      card.Theme = cardTheme();
      card.ColumnID = _props.id;
      
      console.log("Edit Card:", card);
      
      updateCard(card);
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
    resizeTextarea();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      closeModal();
    }
  };

  const handleDel = async () => {
    deleteCard(_props.card);
    _props.setIsOpen(false);
  };

  const resizeTextarea = () => {
    if (textareaRef) {
      textareaRef.style.height = "auto";
      textareaRef.style.height = textareaRef.scrollHeight + "px";
    }
  };

  createEffect(() => {
    _props.isOpen;
    resizeTextarea();
  });

  return (<>
    <Modal
      isOpen={_props.isOpen}
      body={<>
      <div class={getCardClass(cardTheme())}>
        <div class="flex px-1 mb-3">
          <div class="font-normal font-mono">
            <div class="text-sm border rounded w-fit px-1 me-2">#{_props.card.ID}</div>
          </div>
          <textarea
            ref={textareaRef} rows="1"
            class="py-1 border-0 focus:outline-none w-full resize-none overflow-hidden"
            placeholder="Card Name" value={cardName()}
            onInput={handleInput}
            onKeyDown={handleKeyDown}>
          </textarea>
        </div>
        <div class="flex px-2 text-sm gap-4">
          <Dropdown label={<><i class="bi bi-list pr-1"></i>Edit</>} 
            class="border rounded p-1 px-2">
            <p class="dd" onClick={handleDel}>Delete</p>
          </Dropdown>
          <Dropdown label={<><i class="bi bi-paint-bucket pr-2"></i>Color: {cardTheme()}</>} 
            class="border rounded p-1 px-2">
            <For each={Object.entries(curCardTheme())}>
              {([key]) => <p class="dd" onClick={() => setCardTheme(key)}>{key}</p>}
            </For>
          </Dropdown>
        </div>

        <AddSubtask cardID={_props.card.ID} colID={_props.id}></AddSubtask>
        <Subtasks card={_props.card}></Subtasks>
        
        <hr class="mt-2 mb-1 border-t border-dashed"></hr>
        <div class="flex text-xs font-mono px-2">
          <div>Created: 
            <span>{_props.card.DateCreated}</span>
          </div>
        
          <div class="ml-auto">Moved: 
            <span>{_props.card.DateMoved}</span>
          </div>
        </div>
      </div>
      </>
      }
      modalClass=""
      onClose={closeModal}
    ></Modal>
  </>)
}