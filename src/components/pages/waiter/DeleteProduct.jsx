import "../../form/Login.css"
import image from "../../../images/Group 8(1).png"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const DeleteProduct = () => {
  const nav = useNavigate()

  const [error, setError] = useState()
  const deleteP = (e) => {
    e.preventDefault()
    const productId = 15;

    const urlID = (url, ID) => {
      return url + ID
    }

    // eslint-disable-next-line no-template-curly-in-string
    axios.delete('http://localhost:8080/products/15', {
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
        <button onClick={deleteP}>Borra producto</button>
      </div>

    </>
  )
}

export default DeleteProduct