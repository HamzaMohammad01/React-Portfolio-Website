import React, { Component } from "react";
import { Link } from "react-router-dom";
import myPhoto from "../../img/my-photo.png";
import "./home.css";

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="flex1">
					<img
						className="homeCoverImg"
						src={myPhoto}
						alt="cute baby"
					/>
					<div className="flexEnd">
						<div className="text">
							<div className="l1">Hy!</div>
							<div className="l2">I am</div>
							<div className="l3">Hamza Mohamamd,</div>
							<div className="l4">a Web Developer</div>
							<Link to="/know-me">
								<button className="btn btn-mam clickable">
									Know More About Me
								</button>
							</Link>
						</div>
						<div></div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
