
import React from "react"
import Workers from "./Workers"
import { useState } from "react"

const WorkersRender = ({ id, email, role }) => {

  const [worker, setworker] = useState([0])


  // console.log(product)
  return (


    <div className="container-orders" key={id}>
      <table className="default">
        <tr className="header-table">
          <th>Email</th>
          <th>Cargo</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
        <tr>
          <td>{email}</td>
          <td>{role}</td>
          <td>⚙</td>
          <td>❌</td>
        </tr>
      </table>
    </div>



  )

}

export default WorkersRender