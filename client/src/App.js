import React from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
import { loadUser } from "./actions/authActions";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
           

            <AppNavbar />
            <Container>
              <Switch>
                <Route path="/item" component={ItemModal} />
                <Route exact path='/' component={ShoppingList} />
                
              <ItemModal />
              <ShoppingList />
              </Switch>

            </Container>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
