import {
  useEffect,
  createContext,
  useContext,
  useState,
  ReactNode
} from "react"
import { AxiosResponse, AxiosError } from "axios"
import api from "../../data/api"
import { toast } from "react-toastify"

interface ProductsListProviderProps {
  children: ReactNode
}

interface ProductsListContextValue {
  productsList: ProductTemplate[]
  searchList: SearchListKeys
  searchForProducts: (nameToSearch: string) => void
}

export interface ProductTemplate {
  id: number
  name: string
  category: string
  price: number
  img: string
  quantity?: number
}

interface SearchListKeys {
  list: ProductTemplate[]
  nameToSearch: string
}

const ProductsListContext = createContext<ProductsListContextValue>(
  {} as ProductsListContextValue
)

export const ProductsListProvider = ({
  children
}: ProductsListProviderProps) => {
  const [productsList, setProductsList] = useState<ProductTemplate[]>([])
  const [searchList, setSearchList] = useState<SearchListKeys>({
    list: [],
    nameToSearch: ""
  })

  useEffect(() => {
    api
      .get("")
      .then((res: AxiosResponse) => {
        setProductsList(res.data)
      })
      .catch((err: AxiosError) => console.log(err))
  }, [])

  const searchForProducts = (nameToSearch: string) => {
    const list =
      nameToSearch === ""
        ? []
        : productsList.filter(
            (product) =>
              product.name.toLowerCase().includes(nameToSearch.toLowerCase()) ||
              product.category
                .toLowerCase()
                .includes(nameToSearch.toLowerCase())
          )

    list.length === 0 && toast.error("Nenhum produto encontrado")

    setSearchList({ list, nameToSearch })
  }

  return (
    <ProductsListContext.Provider
      value={{ productsList, searchList, searchForProducts }}
    >
      {children}
    </ProductsListContext.Provider>
  )
}

export const useProductsList = () => useContext(ProductsListContext)
