import airmax from './airmax.json'
import Product from "../product"
import { Container } from './styles'

export function Main() {
  return (
    <Container>
      <h2>Listagem</h2>
      <Product product={airmax}/>
    </Container>
  )
}