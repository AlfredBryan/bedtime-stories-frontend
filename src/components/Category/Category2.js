import React from 'react';
import { Link } from "react-router-dom";


class Category2 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "", 
            catId : ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : value})
        console.log("Working")
    }

    handleClick = (event) =>{
        event.preventDefault();
           
    }

    render(){
        return(
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
                    <span class="username">John Doe</span>
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
                    
                  </section>
                </div>
              </div>{" "}
              {/* End*/}
              {/*start of header*/}
              <div class="row">
                <div class="col-lg-12">
                  <section class="panel">
                    <header class="panel-heading">Add Categories</header>
                    <div class="panel-body">
                      <div class="position-center">
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
                                    placeholder="Enter new category">
                                </input>    
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
            )
    }

}

export default Category2