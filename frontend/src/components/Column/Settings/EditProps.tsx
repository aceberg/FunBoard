import { createSignal } from "solid-js";
import { ColumnProps } from "../../../utils/models";
import { updateColumnProps } from "../../../utils/store";

export default function EditProps(_props: any) {

  const [colProps, setColProps] = createSignal<ColumnProps>(_props.conf);

  const handleChange = (e: Event) => {
    const { name, checked } = e.target as HTMLInputElement;
    setColProps(prev => ({
      ...prev,
      [name]: checked,
      "ColumnID": _props.id,
    }));
    
    updateColumnProps(colProps());
  };

  return (<>
    <label class="inline-flex items-center space-x-2 p-1 mt-2">
      <input
        type="checkbox"
        name="GroupByDate"
        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={colProps().GroupByDate}
        onChange={handleChange}
      />
      <span>Group by Date</span>
    </label><br></br>
    <label class="inline-flex items-center space-x-2 p-1 mt-2">
      <input
        type="checkbox"
        name="ShowID"
        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={colProps().ShowID}
        onChange={handleChange}
      />
      <span>Show ID</span>
    </label><br></br>
    <label class="inline-flex items-center space-x-2 p-1 mt-2">
      <input
        type="checkbox"
        name="ShowSubtasks"
        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={colProps().ShowSubtasks}
        onChange={handleChange}
      />
      <span>Show Subtasks</span>
    </label><br></br>
    <label class="inline-flex items-center space-x-2 p-1 mt-2">
      <input
        type="checkbox"
        name="ShowDateCr"
        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={colProps().ShowDateCr}
        onChange={handleChange}
      />
      <span>Show Date: Created</span>
    </label><br></br>
    <label class="inline-flex items-center space-x-2 p-1 mt-2">
      <input
        type="checkbox"
        name="ShowDateMv"
        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        checked={colProps().ShowDateMv}
        onChange={handleChange}
      />
      <span>Show Date: Moved</span>
    </label>
  </>)
}