import { For } from "solid-js";
import { useDragAndDrop } from "@formkit/drag-and-drop/solid";
import Card from "./Table/Card";

function Table() {

  const backItems = ["Test backlog"];
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];
  const doneItems = ["Pickup new mix-tape from Beth"];

  const [backList, backs] = useDragAndDrop<HTMLDivElement, string>(
    backItems,
    { group: "todoList" });
  const [todoList, todos] = useDragAndDrop<HTMLDivElement, string>(
    todoItems,
    { group: "todoList" });
  const [doneList, dones] = useDragAndDrop<HTMLDivElement, string>(
    doneItems,
    { group: "todoList" });

  return (
    <>
      <table class="h-full min-w-full table-fixed border border-gray-300 text-text2">
        <tbody>
        <tr>
          <td ref={backList}>
            <For each={backs()}>
              {(back) => <Card item={back}></Card>}
            </For>
          </td>
          <td ref={todoList}>
            <For each={todos()}>
              {(todo) => <Card item={todo}></Card>}
            </For>
          </td>
          <td ref={doneList}>
            <For each={dones()}>
              {(done) => <Card item={done}></Card>}
            </For>
          </td>
        </tr></tbody>
      </table>
    </>
  )
}

export default Table