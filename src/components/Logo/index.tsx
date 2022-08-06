import "./style.css"

export function Logo() {
  return (
    <div className="logo" onClick={() => window.location.reload()}>
      <span className="logo__name1">Burguer</span>
      <span className="logo__name2">Kenzie</span>
    </div>
  )
}
