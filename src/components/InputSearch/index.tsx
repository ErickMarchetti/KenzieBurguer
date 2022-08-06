import "./style.css"
import { useState } from "react"
import { useProductsList } from "../../contexts/productsList"

function InputSearch() {
  const [valueInputSearch, setValueInputSearch] = useState("")
  const { searchForProducts } = useProductsList()

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Digitar Pesquisa"
        value={valueInputSearch}
        onChange={(e) => setValueInputSearch(e.target.value)}
      />
      <button
        className="form__button"
        onClick={(e) => {
          e.preventDefault()
          searchForProducts(valueInputSearch)
        }}
      >
        Pesquisar
      </button>
    </form>
  )
}

export default InputSearch
