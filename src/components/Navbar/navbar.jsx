import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../../img/logo.png";
import "./Navbar.css";

class Navbar extends Component {
	state = {};
	textDecor = () => {
		let style = {};
		return style;
	};
	render() {
		return (
			<React.Fragment>
				<div className="header">
					{/* <img className="rotate" src={logo} alt="Logo" /> */}
					<Link to="/">
						<div className="logo">Hamza Mohammad</div>
					</Link>
					<nav>
						<ul className="navUl">
							<li className="navLi">
								<Link className="navItems" to="/">
									Home
								</Link>
							</li>
							<li className="navLi">
								<Link className="navItems" to="/blog">
									Blog
								</Link>
							</li>
							<li className="navLi">
								<Link className="navItems" to="/books">
									Books
								</Link>
							</li>
							<li className="navLi">
								<Link className="navItems" to="/know-me">
									Know Me
								</Link>
							</li>
							<li className="navLi">
								<Link className="navItems" to="/contact-me">
									Contact Me
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</React.Fragment>
		);
	}
}

export default Navbar;
