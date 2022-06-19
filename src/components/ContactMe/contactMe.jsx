import React, { Component } from "react";
import "./contactMe.css";

class ContactMe extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<h1>Contact Me</h1>
				<form action="form" className="form centerDiv">
					<input type="email" name="email" className="email" />
					<input
						type="password"
						name="password"
						className="password"
					/>
					<textarea name="description" cols="30" rows="10"></textarea>
					<button type="submit">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}

export default ContactMe;
