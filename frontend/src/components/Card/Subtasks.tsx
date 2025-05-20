import { createSignal, For } from "solid-js";
import { deleteSubtask, updateSubtask } from "../../utils/store";

export default function Subtasks(_props: any) {

  let br = "";
  if (_props.card.Tasks.length > 0) {
    br = " mt-2";
  }

  return (
    <div class={"px-4 text-sm"+br}>
      <For each={_props.card.Tasks}>
        {(task) => <OneSubtask task={task} colID={_props.card.ColumnID}></OneSubtask>}
      </For>
    </div>    
  )
}

function OneSubtask(_props: any) {

  const [checked, setChecked] = createSignal<boolean>(_props.task.Checked);

  const handleCheck = async (e: MouseEvent) => {
    e.stopPropagation();
    
    let task = {..._props.task};
    task.Checked = !checked();
    setChecked(!checked());

    updateSubtask(_props.colID, task);
  }

  const handleDel = async (e: MouseEvent) => {
    e.stopPropagation();
    
    deleteSubtask(_props.colID, _props.task);
  }

  return (
    <div class="flex">
      <label onClick={handleCheck}>
        <input class="form-checkbox"
          type="checkbox" checked={checked()}></input>
          {checked()
            ? <span class="px-2 line-through">{_props.task.Name}</span>
            : <span class="px-2">{_props.task.Name}</span>
          }
      </label>
      <div class="ml-auto" onClick={handleDel}><i class="bi bi-x"></i></div>
    </div>
  )
}