import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Category2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("Working");
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://dragon-legend-5.herokuapp.com/api/v1/category/create",
        this.state
      )
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("Working");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

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
                  <section className="panel" />
                </div>
              </div>{" "}
              {/* End*/}
              {/*start of header*/}
              <div className="row">
                <div className="col-lg-12">
                  <section className="panel">
                    <header className="panel-heading">Add Categories</header>
                    <div className="panel-body">
                      <div className="position-center">
                        <form>
                          <div className="form-group">
                            <label for="createCategoryText">
                              Add a new Category
                            </label>
                            <input
                              onChange={this.handleChange}
                              name="createCategoryText"
                              type="text"
                              className="form-control"
                              id="createCategoryText"
                              placeholder="Enter new category"
                            />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                              submit
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

export default Category2;
