import './App.css';
import Home from './components/home';
import Mensages from './components/mensages';
import Name from './components/name';

function App() {
  
  return (
    <div className="menu-container">
   <Name nome="Michelle Vegas"/>
   <Home home="Home"/>
   <Mensages message="Menssage"/>
   </div>
  );
}

export default App;
