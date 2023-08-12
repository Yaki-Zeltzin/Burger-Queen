import "../../form/Login.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import WorkersRender from "./WorkersRender"

const Workers = () => {

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

    <div className="container-products">
      {staff.map(({ id, email, role }) => (
        <WorkersRender
          id={id}
          email={email}
          role={role}
        />
      ))}
    </div>

  </>
}

export default Workers