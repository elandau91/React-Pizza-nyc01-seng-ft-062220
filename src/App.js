import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas: [],
    topping: "",
    size: '',
    vegetarian: '',
    editId: ''
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas/")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }
  
  clickHandler = (e) => {
    let pizzaId = e.target.closest("tr").dataset.setId

    let newZa = this.state.pizzas.find(pizza => pizza.id === parseInt(pizzaId))
    
    this.setState({
      topping: newZa.topping,
      size: newZa.size,
      vegetarian: newZa.vegetarian,
      editId: pizzaId
    })
  }

  changeHandler = (e) => {
    console.log(e.target.value)

    
    
      this.setState({
        [e.target.name]: e.target.value
      })

  }

  toggle = (e) => {
      let toggle = this.state.vegetarian
      this.setState({
        vegetarian: !toggle
      })
  }

  submitHandler = (e) => {
    let updatedZa = {editId: this.state.editId, topping: this.state.topping, size: this.state.size, vegetarian: this.state.vegetarian}
    console.log(updatedZa)

    let options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian,
      })
    }

    fetch(`http://localhost:3000/pizzas/${this.state.editId}`, options)
    .then(res => res.json())
    .then(res => {
      const elementsInx = this.state.pizzas.findIndex(pizza => pizza.id === parseInt(this.state.editId))
      
      let newArray = [...this.state.pizzas]
      newArray[elementsInx] = {id: parseInt(this.state.editId), topping: this.state.topping, size: this.state.size, vegetarian: this.state.vegetarian}
      
      this.setState({
        pizzas: newArray
      })
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.submitHandler} toggle={this.toggle} changeHandler={this.changeHandler} veg={this.state.vegetarian} size={this.state.size} topping={this.state.topping}/>
        <PizzaList clickHandler={this.clickHandler} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
