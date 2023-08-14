import axios from "axios"
import { useEffect, useState } from "react"

const PageChef = () => {

    const [order, setOrder] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/orders", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
            },
        })
            .then(resp => {
                setOrder(resp.data)
            })
            .catch((error) => {
                setOrder(error)
            })
    }, [])

    console.log(order)

    return (
        <>


            {order.map((p) => (

                <div className="container-orders-chef">
                    <div className="container-order-chef">
                        <div className="header">
                            <p className="name">Cliente: {p.client}</p>
                            <p>{p.dataEntry}</p>
                        </div>

                        <table class="default">
                            <tr className="header-table">
                                <th>Productos</th>
                                <th>Cantidad</th>
                            </tr>
                            <tr>
                                <td>{order.map((p) => p.products.name)}</td>
                                <td>{p.qty}</td>
                            </tr>
                        </table>
                    </div>
                    <button className="button">Terminado</button>
                </div>
            ))}
        </>
    )
}

export default PageChef