import Card from './components/card'
import cardJson from '../public/card.json'

function App() {
  return (
    <div>
      <Card card={cardJson}/>
    </div>
  )
}

export default App