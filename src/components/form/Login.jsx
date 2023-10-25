import "./Login.css"
import image from "../../images/Group 12.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {


  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: false,
    password: false
  });


  const submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/login', user)
      .then((data) => {
        localStorage.setItem('tokenUser', data.data.accessToken)
        setErrors({
          email: false,
          password: false
        });
        if (data.data.user.role === "waiter") {
          navigate('/mesero');
        }
        else if (data.data.user.role === "admin") {
          navigate("/workers")
        }
        else {
          navigate("/chef")
        }
      })
      .catch((e) => {
        // console.error(e)
        if (e.response.data === "Cannot find user") {
          setErrors({
            email: true,
            password: false
          });
        }
        else {
          setErrors({
            email: false,
            password: true
          });
        }

      })
  }

  return (
      <div className="login-container">
        <img src={image} alt="logo-Hamburger" />
        <h1>Iniciar sesión</h1>
        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="email">Correo Electrónico</label>
            <input required
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value
                })
              }}
              type="email"
              name="email"
            />
            {errors.email && (
              <p id="errorUserEmail">Correo no valido</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input required
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value
                })
              }}
              type="password"
              name="password"
            />
            {errors.password && (
              <p id="errorUserPassword">Contraseña incorrecta</p>
            )}
          </div>
          <div className="submit">
            <input
              type="submit"
              className="link"
              placeholder="Enviar"
              value="Ingresar"
            ></input>
          </div>
        </form>

      </div>

   
  )
}

export default Login