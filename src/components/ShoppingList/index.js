import React, { Component } from "react";
import "./shoppingList.css";

class ShoppingList extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        { name: "Bread", quantity: "3 loaves" },
        { name: "Milk", quantity: "2 gallons" },
      ],
    };

    this.nameRef = React.createRef();
    this.quantityRef = React.createRef();
  }

  addItem = () => {
    let name = this.nameRef.current.value;
    let quantity = this.quantityRef.current.value;

    this.setState({ products: [...this.state.products, { name, quantity }] });

    this.nameRef.current.value = "";
    this.quantityRef.current.value = "";
  };

  render() {
    return (
      <div className="container">
        <h1>My Shopping List</h1>
        <div className="formArea">
          <form>
            <input type="text" ref={this.nameRef} placeholder="name" />
            <input type="text" ref={this.quantityRef} placeholder="quantity" />
          </form>
          <button onClick={() => this.addItem(this.state)}>Add</button>
        </div>
        <ul>
          {this.state.products
            .map((item, index) => (
              <li key={`item-index-${index}`}>
                {item.name}: {item.quantity}
              </li>
            ))
            .reverse()}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
