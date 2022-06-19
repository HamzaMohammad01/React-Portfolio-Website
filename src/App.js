import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import Home from "./components/Home/home";
import { Route, Switch, Redirect } from "react-router-dom";
import Books from "./components/Books/books.jsx";
import Blog from "./components/Blog/blog.jsx";
import KnowMe from "./components/KnowMe/knowMe";
import ContactMe from "./components/ContactMe/contactMe";
import Footer from "./components/Footer/footer";

class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navbar />
				<div className="content">
					<Switch>
						<Route path="/books" component={Books} />
						<Route path="/blog" component={Blog} />
						<Route path="/know-me" component={KnowMe} />
						<Route path="/contact-me" component={ContactMe} />
						<Route path="/" component={Home} />
						<Redirect to={"/"} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
