import React, { Component } from "react";
import RenderBook from "./renderBook";
import "./books.css";

class Books extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1 className="booksTitle">Books</h1>
				<div className="allBooks centerDiv">
					<RenderBook />
				</div>
			</div>
		);
	}
}

export default Books;
