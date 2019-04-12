import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="container">
          {/* header start*/}
          <header className="header fixed-top clearfix">
            {/*logo start */}
            <div className="brand">
              <a href="index.html" className="logo">
                <img src={require("../../images/logo.png")} alt="" />
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
                {/*user login dropdown end */}
              </ul>
              {/*search & user and info end */}
            </div>
          </header>
          {/* header end*/}
          {/*sidebar start */}
          <aside>
            <div id="sidebar" className="nav-collapse">
              {/* sidebar menu start*/}
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
                      <a href="/add_story">Create</a>
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
                  <a href="fontawesome.html">
                    <i className="fa fa-bullhorn" />
                    <span>Users </span>
                  </a>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-user" />
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
              {/*sidebar menu end */}
            </div>
          </aside>
          {/*sidebar end */}
          {/* main content start*/}
          <section id="main-content">
            <section className="wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <section className="panel">
                    <header className="panel-heading">
                      All Stories
                      <span className="tools pull-right">
                        <a href="javascript:;" className="fa fa-chevron-down" />
                      </span>
                    </header>
                    <div className="panel-body">
                      <div className="adv-table editable-table ">
                        <div className="clearfix">
                          <div className="btn-group">
                            <Link to="/add_story">
                              <button
                                id="editable-sample_new"
                                className="btn btn-primary"
                              >
                                Add New Story <i className="fa fa-plus" />
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="space15" />
                        <table
                          className="table table-striped table-hover table-bordered"
                          id="editable-sample"
                        >
                          <thead>
                            <tr>
                              <th>Book titles</th>
                              <th>Genre</th>
                              <th>Age Limit</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="">
                              <td>
                                <a href="#">Alice in wonderland</a>{" "}
                              </td>
                              <td>Thriller </td>
                              <td>0 - 3 </td>
                              <td>
                                <a className="edit" href="javascript:;">
                                  Edit
                                </a>
                              </td>
                              <td>
                                <a className="delete" href="javascript:;">
                                  Delete
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </section>
          {/*main content end */}
        </section>
      </div>
    );
  }
}
export default Dashboard;
