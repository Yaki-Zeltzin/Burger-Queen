
import React from "react"
import Workers from "./Workers"
import { useState } from "react"

const WorkersRender = ({ id, email, role }) => {

  // console.log(product)
  return (


    <>
      <tr>
        <td>{email}</td>
        <td>{role}</td>
        <td>⚙</td>
        <td>❌</td>
      </tr>
    </>



  )

}

export default WorkersRender