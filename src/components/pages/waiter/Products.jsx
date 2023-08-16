import "../../form/Login.css"
import image from "../../../images/Group 13.png"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProductsList from "./ProductsList"
import AdminMenu from "./AdminMenu"

const Products = () => {

  const nav = useNavigate()

  const goAddProduct = () => {
    nav("/addproduct")
  }

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
      },
    })
      .then(resp => {
        setStaff(resp.data)

      })
      .catch((error) => {
        console.error(error)
      })
  }, [])



  return <>
    <AdminMenu></AdminMenu>
    <div className="container-admin">
      <img src={image} alt="logo-simple" className="simple-logo"></img>
      <h2 className="title-admin">Productos</h2>
      <div className="workers-list-container">
        <table className="default">
          <tr className="header-table">
            <th>Producto</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
          {staff.map(({ id, name, price, type }) => (
            <ProductsList
              id={id}
              name={name}
              price={price}
              type={type}
            />
          ))}
        </table>
      </div>
      <div className="add-container">
        <button className="small-button" onClick={goAddProduct} >Agregar producto</button>
      </div>
    </div>

  </>
}

export default Products