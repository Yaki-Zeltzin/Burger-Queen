
import "./PageWaiters.css"
import product from "../../../images/Group 8(1).png"
import AddOrder from "./AddOrder"
import { useState } from "react";

const PageWaiters = () => {


    const [modal, setModal] = useState({open:false})
    
    const showModal = () => {
        setModal({open:true})
    }
  
    return (
        <>
        {!modal.open && (
        <section className="container">
            <div className="menuButtons">
                <button className="button">DESAYUNO</button>
                <button className="button">ALMUERZO Y CENA</button>
            </div>

            <div className="container-products">
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
            </div>
            <div className="menuButtons">
                <input
                    onClick={showModal}
                    type="submit"
                    className="button"
                    value="VER CARRITO"
                />
            </div>   
        </section>
        )} {modal.open && (<AddOrder />)}
        </>

    )
}

export default PageWaiters