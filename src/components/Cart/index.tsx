import "./style.css"
import { CartProduct } from "../CartProduct"
import { CartTotal } from "../CartTotal"
import { useCurrentSale } from "../../contexts/currentSale"

export function Cart() {
  const { currentSale } = useCurrentSale()

  return (
    <div className="cart">
      <div className="cart__header">
        <p className="cart__title">Carrinho de compras</p>
      </div>

      <ul className="cart__content">
        {currentSale.length === 0 ? (
          <div className="cart__loadding">
            <p className="loadding__title">Sua sacola está vazia</p>
            <span className="loadding__span">Adicione itens</span>
          </div>
        ) : (
          currentSale.map((product) => (
            <CartProduct product={product} key={product.id + "cart"} />
          ))
        )}
      </ul>

      {currentSale.length !== 0 && <CartTotal />}
    </div>
  )
}
