import { useState } from 'react'
import { Container, InfoArea, PhotoArea } from './styles'
import ProductInfo from './productinfo'
import ProductSettings from './productsettings'
import Actions from './actions'

const Product = ({ product }) => {

  const [settings, setSettings] = useState({
    color: null, 
    size: null
  });

  const changeColor = color => {
    setSettings({
      ...settings,
      color
    })
  };

  const changeSize = size => {
    setSettings({
      ...settings,
      size
    })
  };

  return (
    <>
      <Container>
        <PhotoArea>
          <img alt="product" src={product.photos[0]} />
        </PhotoArea>
        <InfoArea>
          <ProductInfo product={product} />
          <ProductSettings
            product={product}
            selectedSize={settings.size}
            selectedColor={settings.color}
            changeColor={changeColor}
            changeSize={changeSize} />
          <Actions
            productId={product.id}
            settings={settings}  />
        </InfoArea>
      </Container>
      <p></p>
    </>
  )
}

export default Product