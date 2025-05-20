import './App.css'
import Header from './pages/Header'
import Main from './pages/Main'

import "bootstrap-icons/font/bootstrap-icons.min.css";
import { setCurBoard } from './utils/store';
import { apiBoardGetByID } from './utils/api';

function App() {

  const atStart = async () => {
    setCurBoard(await apiBoardGetByID(1));
  }
  atStart();

  return (
    <>
      <div class='flex flex-col h-screen'>
        <Header></Header>
        <Main></Main>
      </div>
    </>
  )
}

export default App
