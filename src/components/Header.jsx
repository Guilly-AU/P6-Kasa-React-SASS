import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import "../scss/header.scss"

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo kasa'/>
        <div>
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
