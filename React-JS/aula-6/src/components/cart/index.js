import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import cartContext from "../../contexts/cartContext";
import CartProduct from "./cartProduct";
import { CartArea, CartButton } from "./styles";

export default function Cart() {
  const {cart, cartOpen, toggleCartOpen} = useContext(cartContext)

  return (
    <>
      <CartButton open={cartOpen} onClick={toggleCartOpen}>
        <BsCart4 />
      </CartButton>
      <CartArea open={cartOpen}>
        <h2>Produtos selecionados</h2>
        {
          cart.map((cartProduct, index) => <CartProduct key={`${cartProduct.id}_${index}`} product={cartProduct} />
          )
        }
      </CartArea>
    </>
  )
}