import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import "../../scss/header.scss"

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo kasa' className='kasa-logo' />
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
