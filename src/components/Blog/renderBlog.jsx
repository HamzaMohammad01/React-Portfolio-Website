import React, { Component } from "react";
import getBlog from "../../services/fakeBlogServices";
import cobra from "../../img/cobra.png";
import "./blog.css";

class RenderBlog extends Component {
	state = { blogRef: React.createRef() };
	colorChange = (e) => {
		let { blogRef } = this.state;
	};
	render() {
		return (
			<div>
				{getBlog.map((data) => {
					return (
						<div
							className={"blog clickable"}
							onMouseMove={this.colorChange}
							key={data.id}
							ref={this.state.blogRef}
						>
							<div className="blogLeft">
								<h1 className={"blogTitle"}>{data.title}</h1>
								<div className={"blogExcerpt"}>
									{data.excerpt}
								</div>
								<div className="btn btnBlog clickable">
									Read More
								</div>
							</div>
							<div className="blogRight">
								<img
									className="blogImg"
									src={cobra}
									alt="cobra"
								/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default RenderBlog;
