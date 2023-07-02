import '../scss/footer.scss'
import logo from '../assets/logo-white.svg'

function Footer() {
	return (
		<footer>
			<h2>
				<img src={logo} alt='logo kasa'/>
			</h2>
			<p>&copy; 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer