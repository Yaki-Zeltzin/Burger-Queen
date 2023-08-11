import { Link, useNavigate } from "react-router-dom"


const MainMenu = () => {
    const nav = useNavigate()

    const handleSession = () => {
        localStorage.removeItem('tokenUser')
        nav("/")
    }

  return (
    <header className="container-header">
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