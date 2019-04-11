import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aside from './Aside';
import Header from './Header'
import Axios from "axios";

const axios =  Axios.create({
  baseURL:"http://dragon-legend-5.herokuapp.com/api/v1/story",
  withCredentials:true,
  headers:{
    Authorization: "",
    token:""
  },
  auth:{
    username:"raji",
    password:"12341234"
  }
})
class CreateStory extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            description:'',
            age_filter:"",
            category:""
        }
    }
     
    onSubmit = (e) =>{
      e.preventDefault();
      const data = {
        ...this.state
      }
      axios.post('/create', {
       data:data
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }

    onChange= (e) => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.value)
    }
  render() {
    return (
      <div>
        <section id="container">
          {/*header start */}
         <Header />
          {/*header end */}
          <Aside />
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
                        <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input
                              type="text"
                              name='title'
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Enter Title"
                              value={this.state.title}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Select Category
                            </label>
                            <select value={this.state.value} onChange={this.onChange} className="form-control m-bot15">
                              <option value="Fairy Tale">Fairy Tale</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="image input">Add Image</label>
                            <input name="image" type="file" id="exampleInputFile" />
                            <p className="help-block">Format: PNG, JPG (1MB)</p>
                          </div>
                          <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                              className="form-control ckeditor"
                              name="description"
                              rows="6"
                              value={this.state.description}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Age Filter</label>
                            <select name="age_filter" value={this.state.age_filter} onChange={this.onChange} className="form-control m-bot15">
                              <option value="0 - 3">0 - 3</option>
                              <option value="4 - 7">4 - 7</option>
                              <option value="8-11">8 - 11</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <button type="submit" value="submit" className="btn btn-info">
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
