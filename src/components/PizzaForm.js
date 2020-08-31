import React from "react"

class PizzaForm extends React.Component {



  render() {
    // console.log(this.state)
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" onChange={this.props.changeHandler} value={
                  this.props.topping
                  // null
                }/>
          </div>
          <div className="col">
            <select value={this.props.size} name="size" onChange={this.props.changeHandler} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" onChange={this.props.toggle} value="Vegetarian" checked={this.props.veg}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" onChange={this.props.toggle} value="Not Vegetarian" checked={this.props.veg === false}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.submitHandler}>Submit</button>
          </div>
        </div>
  
    )
  }
}

export default PizzaForm
