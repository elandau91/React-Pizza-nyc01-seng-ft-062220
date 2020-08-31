import React from "react"

const Pizza = (props) => {
  return(
    <tr data-set-id={props.pizza.id}>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? <span>Yes</span> : <span>No</span>}</td>
      <td><button onClick={props.clickHandler} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
