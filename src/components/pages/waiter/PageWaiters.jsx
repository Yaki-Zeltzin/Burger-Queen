import "./PageWaiters.css"
import AddOrder from "./AddOrder"
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../chef/Product";
import MainMenu from "../../moleculas/MainMenu";

const PageWaiters = () => {


    const [modal, setModal] = useState({ open: false })
    const [data, setData] = useState([])
    const [products, setProductos] = useState([])
    const [productList, setProductList] = useState()


    const showModal = () => {
        setModal({ open: true })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/products", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`,
            },
        })
            .then(resp => {
                setData(resp.data)
                setProductos(resp.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const showBreakfast = () => { 
        const productBreakfast = data.filter(p => {
            if (p.type === "Desayuno") {
                return true
            } else {
                return false
            }
        })
        setProductos(productBreakfast)
    }

    const showLunch = () => {
        const productLunch = data.filter(p => {
            if (p.type === "Almuerzo") {
                return true
            } else {
                return false
            }
        })
        setProductos(productLunch)
    }

    if (!data) return <span>Cargando</span>

    return (
        <>
        <MainMenu />
            {!modal.open && (
                <section className="main-container">
                    <div className="container">
                        <div className="menuButtons">
                            <button className="button" onClick={showBreakfast}>DESAYUNO</button>
                            <button className="button" onClick={showLunch}>ALMUERZO Y CENA</button>
                        </div>

                            <div className="container-products">
                        {products.map(({ id, name, price, image, type }) => (
                                <Product
                                    id={id}
                                    name={name}
                                    price={price}
                                    image={image}
                                    type={type}
                                />
                        ))}
                            </div>
                    </div>
                    <AddOrder />
                </section>
            )}
        </>
    )
}
export default PageWaiters