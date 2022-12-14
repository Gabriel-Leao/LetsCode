
import PropTypes from 'prop-types'
import { ColorArea, SizeArea } from './styles'
import Button from '../../button'
import ColorDisplay from '../../ColorDisplay'

const ProductSettings = ({ product, changeColor, changeSize, selectedSize, selectedColor }) => (
  <>
    <SizeArea>
      Size
      {
        product.model.sizes
          .map(size =>
            <Button
              key={size}
              selected={selectedSize === size}
              onClick={() => changeSize(size)}>
              {size}
            </Button>
          )
      }
    </SizeArea>
    <ColorArea>
      Color
      {
        product.model.colors
          .map(({ id, hex }) =>
            <ColorDisplay
              key={id}
              color={hex}
              selected={selectedColor === id}
              onClick={() => changeColor(id)} />
          )
      }
    </ColorArea>
  </>
)

ProductSettings.defaultProps = {
  selectedSize: null
}

ProductSettings.propTypes = {
  product: PropTypes.shape({
    model: PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
        })
      ).isRequired,
      sizes: PropTypes.arrayOf(
        PropTypes.number
      ).isRequired,
    }).isRequired,
  }).isRequired,
  changeColor: PropTypes.func.isRequired,
  changeSize: PropTypes.func.isRequired,
  selectedSize: PropTypes.number
}

export default ProductSettings