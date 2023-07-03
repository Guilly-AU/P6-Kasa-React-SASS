import { NavLink, Link } from "react-router-dom"
import Kasa from "../assets/Kasa.png"
import "../scss/header.scss"

function Header() {
	return (
		<header>
			<nav className="navbar">
				<div className="logo-Kasa">
					K<Link to="/"><img src={Kasa} alt='logo kasa'/></Link>sa
				</div>
				<div>
					<NavLink to="/">Accueil</NavLink>
					<NavLink to="/about">A propos</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
