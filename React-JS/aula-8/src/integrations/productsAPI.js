import { API_ENDPOINT } from '../defaults/endpoints'

class ProductsAPI {
  static async fetchProducts () {
    const response = await fetch(`${API_ENDPOINT}/products`)
    const storedProducts = await response.json()

    return storedProducts
  }
}

export default ProductsAPI