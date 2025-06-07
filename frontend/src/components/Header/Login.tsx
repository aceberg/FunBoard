import { createSignal } from "solid-js";
import Modal from "../All/Modal";
import { apiLogin } from "../../utils/api";


export default function Login() {

  const [isOpen, setIsOpen] = createSignal(false);
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
    
  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     handleAdd();
  //   }
  // };

  const handleLogin = () => {
    if (username() !== "") {
      
      apiLogin(username(), password());
      setIsOpen(false);
    }
  }

  const cardTheme = "card bg-bg1 text-text2";

  return (<>
    <Modal
      isOpen={isOpen()}
      body={<div class="p-1">
        <input 
        value={username()}
        placeholder="Username"
        class="border rounded px-2"
        onInput={(e) => setUsername(e.target.value)}
        // onKeyDown={handleKeyDown}
        ></input>
        <input 
        value={password()}
        placeholder="Password"
        class="border rounded px-2"
        onInput={(e) => setPassword(e.target.value)}
        // onKeyDown={handleKeyDown}
        ></input>
        <button class="border p-1" onClick={handleLogin}>Login</button>
      </div>
      }
      modalClass={cardTheme}
      onClose={() => setIsOpen(false)}
    ></Modal>
      
      <button class="ml-2 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(true)}>
          <i class="bi bi-plus-circle-dotted"></i>
      </button>
  </>)
}