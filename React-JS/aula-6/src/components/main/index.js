import products from './products.json'
import Product from "../product"
import { Container } from './styles'

export function Main() {
  return (
    <Container>
      <h2>Listagem</h2>
      {
        products.map(product => 
          <Product key={product.id} product={product}/>)
      }
    </Container>
  )
}