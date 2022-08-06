import "./style.css"
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md"

import { ExistingProduct, useCurrentSale } from "../../contexts/currentSale"

interface CartProductProps {
  product: ExistingProduct
}

export function CartProduct({ product }: CartProductProps) {
  const { name, category, img, quantity } = product
  const { addCart, removeCart, removeOneItemCart } = useCurrentSale()

  const removeIcon = MdRemoveCircleOutline({})
  const addIcon = MdAddCircleOutline({})

  return (
    <li className="cartProduct">
      <div className="cartProduct__imgContainer">
        <img src={img} alt={name} />
      </div>

      <div className="cartProduct__titlesContainer">
        <p className="cartProduct__name">{name}</p>
        <p className="cartProduct__category">{category}</p>
        <p className="cartProduct__quantity">Quantidade x{quantity}</p>
      </div>

      <button
        className="cartProduct__removeButton"
        onClick={() => removeCart(product)}
      >
        Remover
      </button>
      <button
        className="cartProduct__removeOneItem"
        onClick={() => removeOneItemCart(product)}
      >
        {removeIcon}
      </button>
      <button
        className="cartProduct__addOneItem"
        onClick={() => addCart(product)}
      >
        {addIcon}
      </button>
    </li>
  )
}
