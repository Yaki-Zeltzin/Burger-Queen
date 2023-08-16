
import React from "react"

const ProductsList = ({ id, name, price, type }) => {

  // contype.log(product)
  return (


    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{type}</td>
        <td>⚙</td>
        <td>❌</td>
      </tr>
    </>



  )

}

export default ProductsList