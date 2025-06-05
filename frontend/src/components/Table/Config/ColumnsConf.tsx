import { For } from "solid-js";
import { curBoard, setCurBoard } from "../../../utils/store";
import { Column, emptyColumn } from "../../../utils/exports";
import { createStore } from "solid-js/store";
import { apiColumnDel, apiColumnEdit } from "../../../utils/api";

export default function ColumnsConf() {

  const [columns, setColumns] = createStore<Column[]>([...curBoard.Columns]);

  const updateName = (id: number, value: string) => {
    setColumns(c => c.ID === id, "Name", value);
  };

  const updateSort = (id: number, value: number) => {
    setColumns(c => c.ID === id, "Sort", value);
  };

  const handleDel = async (id: number) => {
    setColumns(c => c.filter(col => col.ID !== id));

    await apiColumnDel(id);
  }

  const handleAdd = async () => {
    let col = emptyColumn;
    col.BoardID = curBoard.ID;
    setColumns([...columns, col]);
  }

  const handleSave = async () => {
    columns.forEach(async col => await apiColumnEdit(col));
    
    setCurBoard("Columns", columns);
  }

  return (
    <div>
      <h1 class="font-semibold mt-4">Edit Columns</h1>
      <For each={columns.sort((a, b) => a.Sort - b.Sort)}>
        {(col) => (
        <div class="flex gap-2">
          <div>
            <label>Sort:</label>
            <input
              type="number"
              value={col.Sort}
              onInput={(e) => updateSort(col.ID, +e.currentTarget.value)}
              class="border px-2 py-1 ml-2 w-20"
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={col.Name}
              onInput={(e) => updateName(col.ID, e.currentTarget.value)}
              class="border px-2 py-1 ml-2"
            />
          </div>
          <div onClick={() => handleDel(col.ID)}><i class="bi bi-x"></i></div>
        </div>
        )}
      </For>
      <button class="border p-1" onClick={handleAdd}>Add</button>
      <button class="border p-1" onClick={handleSave}>Save</button>
    </div>
  )
}