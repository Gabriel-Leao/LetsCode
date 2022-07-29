import { useContext } from "react"
import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"
import Button from "../../button"
import CartContext from '../../../contexts/cartContext'
import { Container } from "./styles"

const Actions = ({ productId, settings }) => {
  
  const { addProductToCart } = useContext(CartContext)
  
  const handleAddProductToCart = () => {
    addProductToCart({
      id: productId,
      size: settings.size,
      color: settings.color
    })
  }
  
  return (
    <Container>
      <Button
        icon={<BsFillHandbagFill />}
        onClick={() => {}}>Buy Now
      </Button>
      <Button
        icon={<BsFillCartFill />}
        onClick={handleAddProductToCart}>Add to Cart
      </Button>
    </Container>
  )
}

export default Actions