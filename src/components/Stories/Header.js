import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
	render() {
		return (
			<div>

				{/*header start */}
				<header className="header fixed-top clearfix">
					{/* logo start*/}
					<div className="brand">
						<a href="index.html" className="logo">
							<img src={require('../../images/logo.png')} alt="" />
						</a>
						<div className="sidebar-toggle-box">
							<div className="fa fa-bars" />
						</div>
					</div>
					{/*logo end */}

					<div className="top-nav clearfix">
						{/*search & user info start */}
						<ul className="nav pull-right top-menu">
							{/*user login dropdown start */}
							<li className="dropdown">
								<a data-toggle="dropdown" className="dropdown-toggle" href="/">
									<img
										alt=""
										src={require('../../images/avatar1_small.jpg')}
									/>
									<span className="username">John Doe</span>
									<b className="caret" />
								</a>
							</li>
							{/*user login dropdown end */}
						</ul>
						{/*search & user info end */}
					</div>
				</header>
				{/*header end */}
          
			</div>
		);
	}
}

export default Header;
