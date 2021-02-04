import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import Timeline from "./Timeline";
import NewChirp from "./NewChirp";
import admin from "./admin";
import "es6-promise";

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <Router>
      <header id="header1" className=" rounded shadow-lg text-white bg-danger">
        <Link to="/">
          <button id="btn1" className="btn btn-lg text-light">
            My Chirps
          </button>
        </Link>{" "}
        Chirpr
        <Link to="/chirp/add">
          <button id="btn2" className="btn btn-lg text-light">
            New Chirp
          </button>
        </Link>
      </header>
      <main className="container-fluid">
        <div className="background">
        <Switch>
          <Route exact path="/" component={Timeline}></Route>
          <Route exact path="/chirp/add" component={NewChirp}></Route>
          <Route exact path="/chirp/:id/admin" component={admin}></Route>
        </Switch>
        </div>
      </main>
    </Router>
  );
};

interface IAppProps {}

export default App;
