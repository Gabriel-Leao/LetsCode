import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/index'
import routes from "./defaults/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {
          routes.map (
            route => 
              <Route 
                key={route.key} 
                path={route.path}
                element={route.element}
              />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App