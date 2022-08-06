import { createContext, useContext, useState, ReactNode } from "react"
import { ProductTemplate } from "../productsList"

interface CurrentSaleProviderProps {
  children: ReactNode
}

export interface ExistingProduct extends ProductTemplate {
  quantity: number
}

interface CurrentSaleContextValue {
  currentSale: ExistingProduct[]
  addCart: (newProduct: ProductTemplate) => void
  removeOneItemCart: (removedProduct: ExistingProduct) => void
  removeCart: (removedProduct: ExistingProduct) => void
  cartRemoveAll: () => void
}

const CurrentSaleContext = createContext<CurrentSaleContextValue>(
  {} as CurrentSaleContextValue
)

export const CurrentSaleProvider = ({ children }: CurrentSaleProviderProps) => {
  const [currentSale, setCurrentSale] = useState<ExistingProduct[]>([])

  const addCart = (newProduct: ProductTemplate) => {
    const exists = currentSale.find((product) => newProduct.id === product.id)

    if (exists?.quantity) {
      exists.quantity++
      setCurrentSale([...currentSale])
    } else {
      setCurrentSale([...currentSale, { ...newProduct, quantity: 1 }])
    }
  }

  const removeOneItemCart = (removedProduct: ExistingProduct) => {
    if (removedProduct.quantity > 1) {
      removedProduct.quantity--
      setCurrentSale([...currentSale])
    } else {
      const newCart = currentSale.filter(
        (product) => product.id !== removedProduct.id
      )
      setCurrentSale(newCart)
    }
  }

  const removeCart = (removedProduct: ExistingProduct) => {
    const newCart = currentSale.filter(
      (product) => product.id !== removedProduct.id
    )

    setCurrentSale(newCart)
  }

  const cartRemoveAll = () => {
    setCurrentSale([])
  }

  return (
    <CurrentSaleContext.Provider
      value={{
        currentSale,
        addCart,
        removeOneItemCart,
        removeCart,
        cartRemoveAll
      }}
    >
      {children}
    </CurrentSaleContext.Provider>
  )
}

export const useCurrentSale = () => useContext(CurrentSaleContext)
