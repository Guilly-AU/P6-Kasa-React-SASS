import "../scss/error.scss"
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <main className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink className={"link-home"} to="/home">Retouner sur la page d'acceuil</NavLink>
    </main>
  )
}

export default Error
