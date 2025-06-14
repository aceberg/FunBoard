import './App.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Route, Router } from '@solidjs/router';
import Main from './pages/Main'
import StartPage from './pages/StartPage';
import ConfigPage from './pages/ConfigPage';

export default function App() {

  return (
    <>
      <Router>
        <Route path="/" component={StartPage}/>
        <Route path="/board/:id" component={Main}/>
        <Route path="/config" component={ConfigPage}/>
      </Router>
    </>
  )
}
