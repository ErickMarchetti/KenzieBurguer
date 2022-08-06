import InputSearch from "../InputSearch"
import { Logo } from "../Logo"
import "./style.css"

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <InputSearch />
      </div>
    </header>
  )
}
