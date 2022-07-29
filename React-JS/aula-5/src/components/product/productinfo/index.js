import PropTypes from 'prop-types'
import { Collection, ModelDescription, ModelLine, Price, PriceArea } from "./styles";

export default function ProductInfo({product}) {
  return (
    <>
      <ModelLine>{product.model.line}</ModelLine>
      <Collection>{product.collection}</Collection>
      <ModelDescription>{product.model.description}</ModelDescription>
      <PriceArea>
        <Price>{product.price.discountedPrice}</Price>
        <Price scratched>{product.price.originalPrice}</Price>
      </PriceArea>
    </>
  )
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    collection: PropTypes.string.isRequired,
    model: PropTypes.shape({
      line: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.shape({
      discountedPrice: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired
}