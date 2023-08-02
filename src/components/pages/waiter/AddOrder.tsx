import { useState } from "react"

import "./PageWaiters.css"
import PageWaiters from "./PageWaiters"
const AddOrder = () => {

    const [modal, setModal] = useState({ open: true })

    const viewWaiters = () => {
        setModal({ open: false })

    }

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
                        />
                    </div>
                    <div className="field">
                        <label>MESA</label>
                        <input required
                            type="text"
                            name="table"
                            placeholder="Escribe aquí"
                        />
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