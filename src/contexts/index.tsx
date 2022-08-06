import { ReactNode } from "react"
import { ProductsListProvider } from "./productsList"
import { CurrentSaleProvider } from "./currentSale"

interface ProviderProps {
  children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ProductsListProvider>
      <CurrentSaleProvider>{children}</CurrentSaleProvider>
    </ProductsListProvider>
  )
}

export default Provider
