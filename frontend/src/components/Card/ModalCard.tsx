import { createSignal, For } from "solid-js";
import Modal from "../All/Modal";
import { apiBoardGetByID, apiCardDel, apiCardEdit } from "../../utils/api";
import { curBoard, setCurBoard } from "../../utils/exports";
import { cardClass, defaultThemes } from "../../utils/theme-card";

export default function ModalCard(_props: any) {
  type SortEvent = Event & {
    currentTarget: HTMLSelectElement;
    target: HTMLSelectElement;
  };

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
      await apiCardEdit(card);
      setTimeout(async () => {
        setCurBoard(await apiBoardGetByID(curBoard.ID));
      }, 200); // 0.2 second
    }
  }

  const handleInput = (e: Event) => {
    setCardName((e.target as HTMLInputElement).value);
  };

  const handleDel = async () => {
    await apiCardDel(_props.card.ID);
    setTimeout(async () => {
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }, 200); // 0.2 second
  };

  const handleSort = (event: SortEvent) => {
    const value = event.target ? event.target.value : "default";
    setCardTheme(value);
  }

  // const cardTheme = cardClass(_props.card.Theme);

  return (<>
    <Modal
      isOpen={_props.isOpen}
      body={<>
      <div class={cardClass(cardTheme())}>
        <div class="flex px-1 mb-3">
          <div class="font-normal font-mono">
            <div class="text-sm border rounded w-fit px-1 me-2">#{_props.card.ID}</div>
          </div>
          <input
            class="py-1 border-0 focus:outline-none w-full"
            type="text" placeholder="Name" value={cardName()}
            onInput={handleInput}>
          </input>
        </div>
        <div class="flex px-2 text-sm gap-4">
          <button class="border rounded p-1" onClick={handleDel}>Delete</button>
          <div class="border rounded p-1">
            <span class="px-2">Color:</span>
            <select onChange={(event)=>{handleSort(event)}} value={cardTheme()}>
              <For each={defaultThemes}>
                {(theme) => <option value={theme}>{theme}</option>}
              </For>
            </select>
          </div>
        </div>
        
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