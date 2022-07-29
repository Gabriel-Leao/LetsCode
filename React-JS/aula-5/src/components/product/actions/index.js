import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"
import Button from "../../button"
import { Container } from "./styles"

export default function Actions() {
  <Container>
    <Button
      icon={<BsFillHandbagFill />}
      onClick={() => {}}>Buy Now
    </Button>
    <Button
      icon={<BsFillCartFill />}
      onClick={() => {}}>Add to Cart
    </Button>
  </Container>
}