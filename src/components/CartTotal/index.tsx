import { useCurrentSale } from "../../contexts/currentSale"
import "./style.css"

export function CartTotal() {
  const { currentSale, cartRemoveAll } = useCurrentSale()

  return (
    <div className="cartTotal">
      <div className="cartTotal__divider"></div>
      <div className="cartTotal__valueContainer">
        <span className="cartTotal__textTotal">Total:</span>
        <span className="cartTotal__value">
          {currentSale
            .reduce((acc, product) => acc + product.price * product.quantity, 0)
            .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </span>
      </div>
      <button className="cartTotal__button" onClick={() => cartRemoveAll()}>
        Remover todos
      </button>
    </div>
  )
}
