import "../scss/error.scss"
import { Link } from 'react-router-dom'

function Error() {
	return (
		<main className="error">
			<h1>404</h1>
			<p>Oops! The page you are requesting does not exist.</p>
			<Link className={"link-home"} to="/">Return to the homepage.</Link>
		</main>
	);
}

export default Error
