import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="container">
          {/*header start */}
          <header className="header fixed-top clearfix">
            {/* logo start*/}
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
              {/*search & user info end */}
            </div>
          </header>
          {/*header end */}
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
          {/*main content start */}
          <section id="main-content" className="">
            <section className="wrapper">
              {/*page start */}

              {/*start of header */}
              <div className="row">
                <div className="col-lg-12">
                  <section className="panel">
                    <header className="panel-heading">Add Story</header>
                    <div className="panel-body">
                      <div className="position-center">
                        <form>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">
                              Select Category
                            </label>
                            <select className="form-control m-bot15">
                              ame<option>Fairy Tale</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputFile">Add Image</label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">Format: PNG, JPG (1MB)</p>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Description</label>
                            <textarea
                              className="form-control ckeditor"
                              name="editor1"
                              rows="6"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Age Filter</label>
                            <select className="form-control m-bot15">
                              <option>0 - 3</option>
                              <option>4 - 7</option>
                              <option>10 - 11</option>
                            </select>
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
              {/* page end*/}
            </section>
          </section>
          {/*main content end */}
        </section>
      </div>
    );
  }
}

export default CreateStory;
