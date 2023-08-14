import PageWaiters from "../waiter/PageWaiters"
import React from "react"
import { createContext } from "react"
import { useState } from "react"

const choosenProduct = React.createContext();

const Product = ({ id, name, image, price, type }) => {

    const [product, setProduct] = useState([0])


    // console.log(product)
    return (
        <div className="product" key={id}>
            <img className="img-products"
                src={image}
                alt={name}
                id={id}
                onClick={(e) => {
                    console.log(e.target.i)
                }}
            />
            <p className="item-product">Producto: {name}
                <span> ${price}</span></p>
        </div>
    )

}

export default Product