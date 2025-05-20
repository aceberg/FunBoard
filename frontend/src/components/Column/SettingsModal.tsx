import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { ColumnProps, curBoard, setCurBoard } from "../../utils/exports";
import { apiBoardGetByID, apiColumnPropsEdit } from "../../utils/api";

export default function SettingsModal(_props: any) {
  let changed = false;

  const [isOpen, setIsOpen] = createSignal(false);
  const [colProps, setColProps] = createSignal<ColumnProps>(_props.conf);

  const closeModal = async () => {
    setIsOpen(false);
    if (changed) {
      changed = false;
      setColProps(prev => ({
        ...prev,
        ColumnID: _props.id,
      }));
      // console.log(JSON.stringify(colProps(), null, 2));
      await apiColumnPropsEdit(colProps());
      setCurBoard(await apiBoardGetByID(curBoard.ID));
    }
  }

  const handleChange = (e: Event) => {
    const { name, checked } = e.target as HTMLInputElement;
    setColProps(prev => ({
      ...prev,
      [name]: checked,
    }));
    changed = true;
  };

  const cardTheme = "card bg-bg1";

  return (<>
    <Modal
      isOpen={isOpen()}
      body={<div class="p-1">
        <div class="font-bold p-1">Column settings</div>
        <hr></hr>
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
      </div>
      }
      modalClass={cardTheme}
      onClose={closeModal}
    ></Modal>
      <button 
        class="ml-2 text-gray-500 hover:text-gray-700" 
        onClick={() => setIsOpen(true)}>
        <i class="bi bi-three-dots"></i>
      </button>
  </>)
}