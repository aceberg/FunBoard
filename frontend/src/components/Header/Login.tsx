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
      body={<div class="w-64 mx-auto"><div class="grid gap-2 w-20 p-2 px-4">
        <input 
        value={username()}
        type="text"
        placeholder="Username"
        class="my-input"
        onInput={(e) => setUsername(e.target.value)}
        // onKeyDown={handleKeyDown}
        ></input>
        <input 
        value={password()}
        type="password"
        placeholder="Password"
        class="my-input"
        onInput={(e) => setPassword(e.target.value)}
        // onKeyDown={handleKeyDown}
        ></input>
        <button class="text-btn" onClick={handleLogin}>Login</button>
      </div></div>
      }
      modalClass={cardTheme}
      onClose={() => setIsOpen(false)}
    ></Modal>
      
      <button class="ml-2" onClick={() => setIsOpen(true)}>
          <i class="bi bi-plus-circle-dotted icon-btn"></i>
      </button>
  </>)
}