import { createSignal } from "solid-js";
import ModalCard from "./ModalCard";

export default function OneCard(_props: any) {

  const [isOpen, setIsOpen] = createSignal(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const cardClass = "card card-"+_props.card.Theme;

  return (<>
    <div class="p-1">

      <ModalCard 
        isOpen={isOpen()}
        setIsOpen={setIsOpen}
        card={_props.card}
        id={_props.card.ColumnID}
      ></ModalCard>
        
      <div class={cardClass} onClick={handleOpen}>
        <div>{_props.card.Name}</div>
      </div>
    </div>
  </>)
}