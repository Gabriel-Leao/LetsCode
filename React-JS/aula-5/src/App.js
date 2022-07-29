import { IF } from './components/if';
import { Main } from './components/main/index';
import { Menu } from "./components/menu/index";
import { Contador } from "./components/contador/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Teste</h1>
          <Menu />
          <Contador passo={2} />
        </div>
      </header>
      <Main />
      <IF trueElement={<div>Primeiro</div>} falseElement={<div>Segundo</div>} condition={11 == 10}/>
    </div>
  );
}

export default App;