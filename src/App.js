import { Component, Fragment } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ShoppingList />
      </Fragment>
    );
  }
}

export default App;
