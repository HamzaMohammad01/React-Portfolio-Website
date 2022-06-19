import React, { Component } from "react";
import getBooks from "../../services/fakeBookService";
import { Link } from "react-router-dom";
import "./books.css";

class RenderBook extends Component {
	state = { bookList: getBooks() };
	render() {
		let { bookList } = this.state;
		return (
			<div className="booksGrid">
				{bookList.map((data) => {
					return (
						<div className="book" key={data.id}>
							<img
								src={data.img}
								alt={`${data.title} book Cover Image`}
								className="bookImg"
							/>
							<div className="title field">
								Title: {data.title}
							</div>
							<div className="authors field">
								Author(s): {data.Author}
							</div>
							<div className="genre field">
								Genre: {data.Genre}
							</div>
							<div className="pages field">
								Pages: {data.Pages}
							</div>
							<Link
								to={data.buyLink}
								target="_blank"
								style={{ display: "block" }}
							>
								<button className="btn clickable btnBook btnBuy">
									Buy Here
								</button>
							</Link>
							<Link to={data.goodReadLink} target="_blank">
								<button className="btn clickable btnBook btnGRLink">
									Goodread Link
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

export default RenderBook;
