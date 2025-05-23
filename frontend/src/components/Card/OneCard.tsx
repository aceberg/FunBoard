import { createSignal } from "solid-js";
import ModalCard from "./ModalCard";
import { getCardClass } from "../../utils/theme-card";
import Subtasks from "./Subtasks";

export default function OneCard(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (<>
    <div class="p-1">

      <ModalCard 
        isOpen={isOpen()}
        setIsOpen={setIsOpen}
        card={_props.card}
        id={_props.card.ColumnID}
      ></ModalCard>
        
      <div class={getCardClass(_props.card.Theme)} onClick={handleOpen}>
        <div class="flex px-1">
          {_props.conf.ShowID && <div class="w-20 font-normal font-mono">
            <div class="text-sm border rounded w-fit px-1 me-2">#{_props.card.ID}</div>
          </div>}
          <div class="ps-1">{_props.card.Name}</div>
        </div>

        {_props.conf.ShowSubtasks &&
        <Subtasks card={_props.card}></Subtasks>}

        <div>
          {(_props.conf.ShowDateCr || _props.conf.ShowDateMv) &&
          <hr class="mt-2 mb-1 border-t border-dashed"></hr>
          }
          <div class="flex text-xs font-mono px-2">
          {_props.conf.ShowDateCr &&
            <div>Created: 
              <span>{_props.card.DateCreated.substring(0, 10)}</span>
            </div>}
          {_props.conf.ShowDateMv &&
            <div class="ml-auto">Moved: 
              <span>{_props.card.DateMoved.substring(0, 10)}</span>
            </div>}
          </div>
        </div>
      </div>
    </div>
  </>)
}