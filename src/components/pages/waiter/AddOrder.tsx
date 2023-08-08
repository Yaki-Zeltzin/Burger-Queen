import { useState } from "react"

import "./PageWaiters.css"
import PageWaiters from "./PageWaiters"
const AddOrder = () => {

    const [modal, setModal] = useState({ open: true })

    const viewWaiters = () => {
        setModal({ open: true })

    }

    const [order, setOrder] = useState({
        name: "",
        table: "",
        products: []
    })

    console.log(order);


    return (
        <>

            {modal.open &&
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
                        <select name="table"
                            className="field"
                            onChange={(e) => {
                                setOrder({
                                    ...order,
                                    table: e.target.value
                                })
                            }}>
                            <option value="" >Elija una mesa</option>
                            <option value="mesa-1" >mesa 1</option>
                            <option value="mesa-2" >Mesa 2</option>
                            <option value="mesa-3" >Mesa 3</option>
                        </select>
                    </div>
                    <h1>CARRITO</h1>
                    <div className="order-history">
                        <div className="items">
                            <p>café con leche</p>
                            <div className="delete">
                                <p > $17</p>
                                <p> X</p>
                            </div>
                        </div>
                        <div className="items">
                            <p>sandwich</p>
                            <div className="delete">
                                <p > $17</p>
                                <p> X</p>
                            </div>
                        </div>
                    </div>
                    <p className="total">TOTAL: <span>$190</span></p>
                    <div className="menuButtons">
                        <input
                            onClick={viewWaiters}
                            type="submit"
                            className="button"
                            value="ENVIAR A COCINA"
                        />
                    </div>
                </form>}  {!modal.open && (<PageWaiters />)}

        </>
    )
}
export default AddOrder