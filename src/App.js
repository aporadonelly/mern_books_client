import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetatils from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowBookList}></Route>
          <Route path="/create-book" component={CreateBook}></Route>
          <Route path="/edit-book/:id" component={UpdateBookInfo}></Route>
          <Route path="/show-book/:id" component={ShowBookDetatils}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
