import "../../form/Login.css"
import axios from "axios"
import { useState, useEffect } from "react"
import WorkersRender from "./WorkersRender"
import { useNavigate } from "react-router-dom"

const Workers = () => {


  const nav = useNavigate()

  const goAddWorker = () => {
    nav("/registerStaff")
  }

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users", {
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




  console.log(staff);
  return <>
    <h2 className="title-admin">Trabajadores Burger Queen</h2>
    <div className="workers-list-container">
      <table className="default">
        <tr className="header-table">
          <th>Email</th>
          <th>Cargo</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
        {staff.map(({ id, email, role }) => (
          <WorkersRender
            id={id}
            email={email}
            role={role}
          />
        ))}
      </table>
    </div>
    <div className="add-container">
      <button className="small-button" onClick={goAddWorker} >Agregar trabajador</button>
    </div>

  </>
}

export default Workers