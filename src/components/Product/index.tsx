import { ProductTemplate } from "../../contexts/productsList"
import "./style.css"

interface ProductProps {
  addCart: (newProduct: ProductTemplate) => void
  product: ProductTemplate
}

export function Product({ product, addCart }: ProductProps) {
  const { name, category, price, img } = product

  return (
    <li className="card">
      <div className="card__imgContainer">
        <img className="card__img" src={img} alt="" />
      </div>

      <h2 className="card__name">{name}</h2>

      <p className="card__category">{category}</p>

      <span className="card__price">
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </span>

      <button
        className="card__addButton"
        onClick={() => {
          addCart(product)
        }}
      >
        Adicionar
      </button>
    </li>
  )
}
