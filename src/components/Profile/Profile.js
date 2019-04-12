import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="container">
          {/*header start*/}
          <header className="header fixed-top clearfix">
            {/*logo start*/}
            <div className="brand">
              <a href="index.html" className="logo">
                <img src={require("../../images/logo.png")} alt="" />
              </a>
              <div className="sidebar-toggle-box">
                <div className="fa fa-bars" />
              </div>
            </div>
            {/*logo end*/}

            <div className="top-nav clearfix">
              {/*search & user info start*/}
              <ul className="nav pull-right top-menu">
                {/*user login dropdown start*/}
                <li className="dropdown">
                  <a
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                    href="/"
                  >
                    <img
                      alt=""
                      src={require("../../images/avatar1_small.jpg")}
                    />
                    <span className="username">John Doe</span>
                    <b className="caret" />
                  </a>
                </li>
                {/*user login dropdown end*/}
              </ul>
              {/*search & user info end*/}
            </div>
          </header>
          {/*header end*/}
          {/*sidebar start*/}
          <aside>
            <div id="sidebar" className="nav-collapse">
              {/*sidebar menu start*/}
              <ul className="sidebar-menu" id="nav-accordion">
                <li>
                  <Link to="/dashboard">
                    <i className="fa fa-dashboard" />
                    <span>Dashboard</span>
                  </Link>
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
                  <Link href="/">
                    <i className="fa fa-user" />
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
              {/*sidebar menu end*/}
            </div>
          </aside>
          {/*sidebar end*/}
          {/*main content start*/}
          <section id="main-content">
            <section className="wrapper">
              <div className="row">
                <div className="col-md-12">
                  <section className="panel">
                    <div className="panel-body profile-information">
                      <div className="col-md-3">
                        <div className="profile-pic text-center">
                          <img
                            src={require("../../images/lock_thumb.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="profile-desk">
                          <h1>David Rojormillan</h1>
                          <span className="text-muted">Email: | Phone: </span>
                          <br />
                          <Link to="/add_story" className="btn btn-primary">
                            Add Story
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="profile-statistics">
                          <h1>1240</h1>
                          <p>Stories</p>
                          <h1>50</h1>
                          <p>BookMarks</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>{" "}
              {/* End*/}
              {/*start of header*/}
              <div className="row">
                <div className="col-lg-12">
                  <section className="panel">
                    <header className="panel-heading">Edit Profile</header>
                    <div className="panel-body">
                      <div className="position-center">
                        <form>
                          <div className="form-group">
                            <label for="exampleInputEmail1">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input
                              type="Email"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>

                          <div className="form-group">
                            <label for="exampleInputFile">
                              Change Profile Photo
                            </label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">Format: PNG, JPG (1MB)</p>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Profile;
