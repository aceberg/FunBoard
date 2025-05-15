import './App.css'
import Header from './pages/Header'
import Main from './pages/Main'

import "bootstrap-icons/font/bootstrap-icons.min.css";

function App() {

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
