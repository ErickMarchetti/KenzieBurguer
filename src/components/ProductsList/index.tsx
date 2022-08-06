import "./style.css"
import { Product } from "../Product"

import { useProductsList } from "../../contexts/productsList"
import { useCurrentSale } from "../../contexts/currentSale"

export function ProductsList() {
  const { productsList, searchList } = useProductsList()
  const { addCart } = useCurrentSale()

  const checkSearchList = () =>
    searchList.list.length === 0 ? productsList : searchList.list

  return (
    <>
      <ul className="productsList">
        {checkSearchList().map((product) => (
          <Product product={product} key={product.id} addCart={addCart} />
        ))}
      </ul>
    </>
  )
}
