import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import WineList from "./components/WineList";
import EditWine from "./components/EditWine";
import CreateWine from "./components/CreateWine";
import CreateUser from "./components/CreateUser";

function App() {
  return (
      <Router>
          <div className="container">
            <Navbar />
            <br/>
            <Route path="/" exact component={WineList} />
            <Route path="/edit/:id" component={EditWine} />
            <Route path="/create" component={CreateWine} />
            <Route path="/user" component={CreateUser} />
          </div>
      </Router>
  );
}

export default App;