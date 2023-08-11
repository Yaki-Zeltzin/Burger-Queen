import "../../form/Login.css"
import image from "../../../images/Group 8(1).png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const RegisterStaff = () => {
    const nav = useNavigate()

    const[error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value,
            details:{
                fullname: e.target.fullName.value,
            },
        }

         axios.post('http://localhost:8080/users', data)
         .then(() => {
             nav("/")
         })
         .catch((err) => {
             setError(err)
         })
    }

    return (
        <>
            <div className="login-container">
                <img src={image} alt="logo-Hamburger" />
                <h1>Crear nuevo trabajador</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="fullNmae">Nombre Completo</label>
                        <input required
                            type="text"
                            name="fullName"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input required
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input required
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Puesto</label>
                        <input required
                            type="text"
                            name="role"
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="button">Ingresar</button>
                        {error && (
                             <p className="error" >
                        {error.response.data}
                    </p>
                )}
                    </div>
                </form>

            </div>

        </>
    )
}

export default RegisterStaff