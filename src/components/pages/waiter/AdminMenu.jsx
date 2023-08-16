import { useNavigate } from "react-router-dom"
import "./PageWaiters.css"

const AdminMenu = () => {
  const nav = useNavigate();

  const goWorkers = () => {
    nav("/workers")
  }

  const goProducts = () => {
    nav("/products")
  }

  return (
    <>
      <div className="container-admin-menu">
        <button className="admin-buttons" onClick={goWorkers}>Trabajadores</button>
        <button className="admin-buttons" onClick={goProducts}>Productos</button>
      </div>
    </>

  )
}

export default AdminMenu