import "../scss/error.scss"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={"link-home"} to="/">Retouner sur la page d'acceuil</Link>
    </main>
  )
}

export default Error
