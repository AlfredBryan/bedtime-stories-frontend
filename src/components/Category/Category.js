import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="container">
          <header class="header fixed-top clearfix">
            <div class="brand">
              <a href="index.html" class="logo">
                <img src={require("../../images/logo.png")} alt="" />
              </a>
              <div class="sidebar-toggle-box">
                <div class="fa fa-bars" />
              </div>
            </div>

            <div class="top-nav clearfix">
              <ul class="nav pull-right top-menu">
                <li class="dropdown">
                  <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                    <img
                      alt=""
                      src={require("../../images/avatar1_small.jpg")}
                    />
                    <span class="username">John Doe</span>
                    <b class="caret" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <aside>
            <div id="sidebar" class="nav-collapse">
              <ul class="sidebar-menu" id="nav-accordion">
                <li>
                  <a href="index.html">
                    <i class="fa fa-dashboard" />
                    <span>Dashboard</span>
                  </a>
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
                      <a href="/add_story">Create</a>
                    </li>
                    <li>
                      <a href="#">View</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="fontawesome.html">
                    <i class="fa fa-bullhorn" />
                    <span>Profile </span>
                  </a>
                </li>

                <li>
                  <Link to="/">
                    <i class="fa fa-user" />
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <section id="main-content" class="">
            <section class="wrapper">
              <div class="row">
                <div class="col-lg-12">
                  <section class="panel">
                    <header class="panel-heading">Add Category</header>
                    <div class="panel-body">
                      <div class="position-center">
                        <form role="form">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputFile">Add Image</label>
                            <input type="file" id="exampleInputFile" />
                            <p class="help-block">Format: PNG, JPG (1MB)</p>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Description</label>
                            <textarea
                              class="form-control ckeditor"
                              name="editor1"
                              rows="6"
                            />
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

export default Category;
