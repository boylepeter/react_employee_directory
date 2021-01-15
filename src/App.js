import React, { Component } from "react";
import Container from "./components/Container";
import Table from "./components/Table"
import Search from "./components/SearchForm";
import API from "./utils/API";


class App extends Component {
  state = {
    search: "",
    results: [],
    filter: []
  };

  componentDidMount(){
    API.search().then(res => { this.setState({results: res.data.results, filter: res.data.results})})
    .catch(err => console.log(err));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const empList = this.state.filter.filter(emp => {
      const fullName = (emp.name.first + " " + emp.name.last).toLowerCase()
      return fullName.includes(this.state.search)
    })
    this.setState({filter: empList})
  }

  render(){
    return (
      <Container>
        <Search handleInputChange={this.handleInputChange} 
        search={this.state.search} 
        handleFormSubmit={this.handleFormSubmit}/>
        <Table matchEmp={this.state.filter}/>
      </Container>
    );
  }
}

export default App;
