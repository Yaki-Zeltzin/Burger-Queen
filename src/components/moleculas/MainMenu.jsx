import { Link, useNavigate } from "react-router-dom"
import logo from "../../images/Group 8(1).png"

const MainMenu = () => {
    const nav = useNavigate()

    const handleSession = () => {
        localStorage.removeItem('tokenUser')
        nav("/")
    }

  return (
    <header className="container-header">
            <img src={logo} alt="hamburger"/>
        {
            !localStorage.getItem('tokenUser') ? (
                <p>
                    <Link className="menu-item" to="login">
                                    Iniciar sesión
                    </Link>
                </p>
            ) : (
                <p>
                    <a className="menu-item " onClick={handleSession}>
                        Cerrar sesión
                    </a>
                </p>
            )
        }
        
    </header>
  )
}

export default MainMenu