import { IF } from './components/if';
import { Main } from './components/main/index';
import { Menu } from "./components/menu/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Teste</h1>
          <Menu />
        </div>
      </header>
      <Main />
      <IF trueElement={<div>Primeiro</div>} falseElement={<div>Segundo</div>} condition={10 == 10}/>
    </div>
  );
}

export default App;
