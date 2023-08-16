import "../../form/Login.css"
import image from "../../../images/Group 8(1).png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Addproduct = () => {
  const nav = useNavigate()

  const [error, setError] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: e.target.name.value,
      price: e.target.price.value,
      type: e.target.type.value,
      dateEntry: "2022-03-05 15:14:10"
    }

    axios.post('http://localhost:8080/products', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
      },
    })
      .then(() => {
        nav("/products")
      })
      .catch((err) => {
        setError(err)
        console.log(error)
      })
  }

  return (
    <>
      <div className="login-container">
        <img src={image} alt="logo-Hamburger" />
        <h1>Agregar producto</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nombre producto</label>
            <input required
              type="text"
              name="name"
            />
          </div>
          <div className="field">
            <label htmlFor="price">Valor</label>
            <input required
              type="Number"
              name="price"
            />
          </div>
          <div className="field">
            <label htmlFor="type">Tipo</label>
            <input required
              type="text"
              name="type"
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

export default Addproduct