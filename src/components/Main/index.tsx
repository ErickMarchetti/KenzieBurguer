import "./style.css"
import { ProductsList } from "../ProductsList"
import { Cart } from "../Cart"
import { useProductsList } from "../../contexts/productsList"

export function Main() {
  const { searchList } = useProductsList()

  return (
    <main className="main">
      {searchList.list.length !== 0 && (
        <h2 className="main__search">
          Resultados para:
          <span className="main__search__category">
            {" "}
            {searchList.nameToSearch}
          </span>
        </h2>
      )}

      <div className="main__content">
        <ProductsList />

        <Cart />
      </div>
    </main>
  )
}
