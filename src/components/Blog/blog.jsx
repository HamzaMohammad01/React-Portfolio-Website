import React, { Component } from "react";
import RenderBlog from "./renderBlog";
import "./blog.css";

class Blog extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<h1>Blogs</h1>
				<div className="allBlogs">
					<RenderBlog />
				</div>
			</React.Fragment>
		);
	}
}

export default Blog;
