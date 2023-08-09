import PageWaiters from "../waiter/PageWaiters"
import React from "react"
import { createContext } from "react"
import { useState } from "react"

const choosenProduct = React.createContext();

const Product = ({ id, name, image, price, type }) => {

    const [product, setProduct] = useState([0])


    const addProduct = (e) => {
        const idProduct = e.target.id;
        setProduct(product.concat(idProduct))
        console.log("id de producto  " + idProduct)
        console.log(product)

    }

    // console.log(product)
    return (
        <div className="product" key={id} >
            <img className="img-products"
                src={image}
                alt={name}
                id={id}
                onClick={addProduct}
            />
            <p className="item-product">Producto: {name}
                <span> ${price}</span></p>
        </div>
    )

}

export default Product