import { Button, Menu } from 'antd'
import { MdCommute, MdAccessibility } from 'react-icons/md'

function App() {
  const getName = () => "Leão"

  const estudanates = new Array("Suellen, Gabriel")

  const home = () => {
    console.log("Indo para a página inicial")
  }

  const sobre = () => {
    console.log("Indo para a Sobre nós")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Menu mode="horizontal">
            <Menu.Item key="home" onClick={home}>
              Home
            </Menu.Item>
            <Menu.Item key="team">
              Equipe
            </Menu.Item>
            <Menu.Item key="aboutus" onClick={sobre}>
              Sobre nós
            </Menu.Item>
            <Menu.Item key="contact">
              Contato
            </Menu.Item>
          </Menu>

          <h1 className="titulo">{getName()} está testando o react</h1>
          <p>{estudanates.map(aluno => aluno + ", ")}</p>

          <label htmlFor="teste">Label: </label>
          <input id="teste" type="text" placeholder="digite um texto"></input>

          <h2>Lista</h2>
          <Button icon={
          <>
            <MdCommute />
            <MdAccessibility />
          </>
        }>
          Cadastrar item
        </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
