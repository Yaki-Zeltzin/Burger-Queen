import { useState } from "react"
import "./PageWaiters.css"
import PageWaiters from "./PageWaiters"

const AddOrder = () => {
    //const [modal, setModal] = useState({ open: true })
    const [order, setOrder] = useState({
        name: "",
        table: 0,
        products: []
    })

    const [counter, setCounter] = useState(1)

    const showProducts = () => {
        setOrder({
            name: "",
            table: 0,
            products: []
        })

    }
    return (
        <>
            <form className="container-cart">
                <div className="field">
                    <label>CLIENTE</label>
                    <input required
                        type="text"
                        name="customer"
                        placeholder="Escribe aquí"
                        onChange={(e) => {
                            setOrder({
                                ...order,
                                name: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="field">
                    <label>MESA</label>
                    <input required
                        type="text"
                        name="table"
                        placeholder="Escribe aquí"
                        onChange={(e) => {
                            setOrder({
                                ...order,
                                table: e.target.value
                            })
                        }}
                    />
                </div>
                <h1>CARRITO</h1>
                <div className="order-history">
                    <div className="items">
                        <p><span>[{counter}] </span>café con leche</p>
                        <div className="delete">
                            <p > $17</p>
                            <p onClick={(e) => {
                                setCounter(counter+1)
                            }}>+</p>  
                            <p onClick={(e) => {
                                counter > 0 ? setCounter(counter - 1) : setCounter(1)  
                            }}>-</p>
                            <p> X</p>
                        </div>
                    </div>
                </div>
                <p className="total">TOTAL: <span>$190</span></p>
                <div className="menuButtons">
                    <input
                        onClick={showProducts}
                        type="submit"
                        className="button"
                        value="ENVIAR A COCINA"
                    />
                </div>
            </form>

        </>
    )
}
export default AddOrder