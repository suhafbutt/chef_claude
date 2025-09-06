import logo from "../assets/images/ChefClaudeLogo.svg"
import "../assets/css/header.css"

export function Header () {
  return (
    <header className="header-container">
      <img src={logo} className="header-image"/>
      <h1 className="header-title">Chef Claude</h1>
    </header>
  )
}