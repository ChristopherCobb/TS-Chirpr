import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Timeline from "./components/Timeline" 
import "es6-promise";



const App: React.FunctionComponent = () => {

	return(
		<Router>
				<nav> 
					<Link to="/">
						<button id="btn1" className="btn btn-lg btn-outline-primary">My Chirps</button>
					</Link> Chirp Chirp 
					<Link to="NewChirp">
						<button id="btn2" className="btn btn-lg btn-outline-dark">New Chirp</button>
					</Link>
				</nav>
			<main className="container-fluid">
			
			<Switch>
				<Route path="/" component={Timeline}></Route>
			</Switch>

			</main>
		</Router>






	)


}




export default App;
