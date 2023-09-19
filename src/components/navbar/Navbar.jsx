import './navbar_styles.css'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-header" data-testid="navbar">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="https://www.autofacil.com.mx/img/autofacil_logo.png" width="300"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Plataforma</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cotización</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Clientes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Recursos</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Sobre nosotros</Link>
                  </li>
                </ul>
                <form className="d-flex actions text-nowrap">
                  <button className="Regístrate"><a href="/registro">Regístrate</a></button>
                  <button className="Inicia-Sesión"><a href="/login">Inicia Sesión</a></button>
                </form>
              </div>
            </div>
          </nav> 
    )
}
export default Navbar