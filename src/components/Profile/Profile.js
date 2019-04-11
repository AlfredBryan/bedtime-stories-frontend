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
          <header class="header fixed-top clearfix">
            {/*logo start*/}
            <div class="brand">
              <a href="index.html" class="logo">
                <img src={require("../../images/logo.png")} alt="" />
              </a>
              <div class="sidebar-toggle-box">
                <div class="fa fa-bars" />
              </div>
            </div>
            {/*logo end*/}

            <div class="top-nav clearfix">
              {/*search & user info start*/}
              <ul class="nav pull-right top-menu">
                {/*user login dropdown start*/}
                <li class="dropdown">
                  <a data-toggle="dropdown" class="dropdown-toggle" href="/">
                    <img
                      alt=""
                      src={require("../../images/avatar1_small.jpg")}
                    />
                    <span class="username">{this.props.username}</span>
                    <b class="caret" />
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
            <div id="sidebar" class="nav-collapse">
              {/*sidebar menu start*/}
              <ul class="sidebar-menu" id="nav-accordion">
                <li>
                  <Link to="/dashboard">
                    <i class="fa fa-dashboard" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li class="sub-menu">
                  <a href="javascript:;">
                    <i class="fa fa-laptop" />
                    <span>Categories</span>
                  </a>
                  <ul class="sub">
                    <li>
                      <a href="#">Create</a>
                    </li>
                    <li>
                      <a href="#">View</a>
                    </li>
                  </ul>
                </li>
                <li class="sub-menu">
                  <a href="javascript:;">
                    <i class="fa fa-book" />
                    <span>Stories</span>
                  </a>
                  <ul class="sub">
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
                    <i class="fa fa-bullhorn" />
                    <span>Profile </span>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <i class="fa fa-user" />
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
            <section class="wrapper">
              <div class="row">
                <div class="col-md-12">
                  <section class="panel">
                    <div class="panel-body profile-information">
                      <div class="col-md-3">
                        <div class="profile-pic text-center">
                          <img
                            src={require("../../images/lock_thumb.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="profile-desk">
                          <h1>David Rojormillan</h1>
                          <span class="text-muted">Email: | Phone: </span>
                          <br />
                          <Link to="/add_story" class="btn btn-primary">
                            Add Story
                          </Link>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="profile-statistics">
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
              <div class="row">
                <div class="col-lg-12">
                  <section class="panel">
                    <header class="panel-heading">Edit Profile</header>
                    <div class="panel-body">
                      <div class="position-center">
                        <form>
                          <div class="form-group">
                            <label for="exampleInputEmail1">First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input
                              type="Email"
                              class="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>

                          <div class="form-group">
                            <label for="exampleInputFile">
                              Change Profile Photo
                            </label>
                            <input type="file" id="exampleInputFile" />
                            <p class="help-block">Format: PNG, JPG (1MB)</p>
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-info">
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
