import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import React, { Component, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Home from "./Components/Home";
import { Bootstrap, Navbar, NavDropdown } from "react-bootstrap";

const reducer = () => {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch({ type: "@@INIT" });

function App() {
  const [transfer, setTransfer] = useState(false)

  return (
    <div className="App">
      <div className="lockdown">
        <div className="introdiv"></div>
        <div className="introdiv-2"></div>

        <div className="locked-top">
          <Router>
            <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand><Link className="discreet" to={{ pathname: "/" }}>Willem Duiker</Link></Navbar.Brand>
              <NavDropdown className="discreet" title="See More" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="discreet-dark" to={{ pathname: "/about" }}>About</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="discreet-dark" to={{ pathname: "/resume" }}>Resume</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="discreet-dark" to={{ pathname: "/contact" }}>Projects</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
