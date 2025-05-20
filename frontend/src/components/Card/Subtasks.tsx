import { createSignal, For } from "solid-js";
import { apiSubtaskEdit } from "../../utils/api";

export default function Subtasks(_props: any) {

  return (
    <div class="px-4 mt-2 text-sm">
      <For each={_props.card.Tasks}>
        {(task) => <OneSubtask task={task}></OneSubtask>}
      </For>
    </div>    
  )
}

function OneSubtask(_props: any) {

  const [checked, setChecked] = createSignal<boolean>(_props.task.Checked);

  const handleCheck = async () => {
    
    let task = {..._props.task};
    task.Checked = !checked();
    await apiSubtaskEdit(task);
    
    setChecked(!checked());
  }

  return (
    <>
      <input onChange={handleCheck} class="form-checkbox"
        type="checkbox" checked={checked()}></input>
        {checked()
          ? <span class="px-2 line-through">{_props.task.Name}</span>
          : <span class="px-2">{_props.task.Name}</span>
        }
    </>   
  )
}