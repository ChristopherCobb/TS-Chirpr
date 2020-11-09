import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { RouteComponentProps } from  'react-router-dom'
import Timeline from "./Timeline" 
import NewChirp from "./NewChirp"
import admin from "./admin"
import "es6-promise";




const App: React.FunctionComponent = (props) => {

	return(
		<Router>
				<h1 id="header1" className=" rounded shadow-lg text-white bg-danger"> 
					<Link to="/">
						<button id="btn1" className="btn btn-lg btn-outline-dark">My Chirps</button>
					</Link> Chirpr
					<Link to="/chirp/add">
						<button id="btn2" className="btn btn-lg btn-outline-dark">New Chirp</button>
					</Link>
				</h1>
			<main className="container-fluid">
			
			<Switch>
				<Route exact path="/" component={Timeline}></Route>
				<Route exact path="/chirp/add" component={NewChirp}></Route>
				<Route exact path="/chirp/:id/admin" component={admin}></Route>
			</Switch>

			</main>
		</Router>






	)


}


export default App;
