import React, { Component } from "react";
import "./footer.css";
import getTime from "../../services/DateTime";

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer>
				<div className="footerText">
					&#169; Hamza Mohammad {getTime.getFullYear()}. All Rights
					Reserved
				</div>
			</footer>
		);
	}
}

export default Footer;
