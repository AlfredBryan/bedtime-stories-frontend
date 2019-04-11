import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aside extends Component {
    
	render() {
		return (
			<div>
				<aside>
					<div id="sidebar" className="nav-collapse">
						{/*sidebar menu start */}
						<ul className="sidebar-menu" id="nav-accordion">
							<li>
								<a href="index.html">
									<i className="fa fa-dashboard" />
									<span>Dashboard</span>
								</a>
							</li>
							<li className="sub-menu">
								<a href="javascript:;">
									<i className="fa fa-laptop" />
									<span>Categories</span>
								</a>
								<ul className="sub">
									<li>
										<a href="#">Create</a>
									</li>
									<li>
										<a href="#">View</a>
									</li>
								</ul>
							</li>
							<li className="sub-menu">
								<a href="javascript:;">
									<i className="fa fa-book" />
									<span>Stories</span>
								</a>
								<ul className="sub">
									<li>
										<a href="#">Create</a>
									</li>
									<li>
										<a href="#">View</a>
									</li>
								</ul>
							</li>
							<li>
								<Link to="/profile">
									<i className="fa fa-bullhorn" />
									<span>Profile </span>
								</Link>
							</li>

							<li>
								<Link to="/">
									<i className="fa fa-user" />
									<span>Log Out</span>
								</Link>
							</li>
						</ul>
						{/* sidebar menu end*/}
					</div>
				</aside>
				{/*sidebar end */}
    
			</div>
		);
	}
}

export default Aside;
