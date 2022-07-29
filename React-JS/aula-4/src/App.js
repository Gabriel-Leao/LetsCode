import { CheckableButton } from './components/checkablebutton';
import { Contador } from './components/contador';
import { Main } from './components/main/index';
import { Menu } from "./components/menu/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CheckableButton>Teste</CheckableButton>
          <Menu />
          <Contador passo={1}/>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
