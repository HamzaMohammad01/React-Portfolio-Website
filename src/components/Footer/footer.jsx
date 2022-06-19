import React, { Component } from "react";
import "./footer.css";
import getTime from "../../services/DateTime";

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer>
				&#169; Hamza Mohammad {getTime.getFullYear()}. All Rights
				Reserved
			</footer>
		);
	}
}

export default Footer;
