import { createSignal } from "solid-js";
import { Subtask } from "../../utils/exports";
import { updateSubtask } from "../../utils/store";


export default function AddSubtask(_props: any) {

  const [taskText, setTaskText] = createSignal<string>("");

  const handleAdd = () => {
    if (taskText() !== "") {
      const task:Subtask = {
        ID: 0,
        CardID: _props.cardID,
        Name: taskText(),
        Checked: false
      };

      setTaskText("");
      updateSubtask(_props.colID, task);
    }
  }

  const handleInput = (e: Event) => {
    setTaskText((e.target as HTMLInputElement).value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
    {_props.cardID !== 0 &&
    <div class="flex p-2 text-sm mt-2">
      <input 
        value={taskText()}
        placeholder="Add subtask"
        class="border-l border-y rounded-l px-2"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      ></input>
      <button class="border rounded-r px-2" onClick={handleAdd}>Add</button>
    </div>}
    </>
  )
}
