import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import FormParent from "./components/FormParent.js"
import uniqid from "uniqid"

class App extends Component{
  constructor(){
    super();
    this.state={
      basicInfo:
      {name: '',
        phone:'',
        title:'',
        address:'',
        email: ''
      },
      experienceRay: [{
        jobTitle: '',
        company: '',
        city: '',
        from: '',
        to: '',
        description: '',
        id: uniqid()
      }],
    }
    this.handleInfo = this.handleInfo.bind(this);
    this.handleExperience=this.handleExperience.bind(this);

  }
  handleInfo = (e) =>{
    this.setState({
      basicInfo:{
        ...this.state.basicInfo,
        [e.target.id]: e.target.value
      }
    })
  }
  handleExperience=(e) =>{
    let experiences = [...this.state.experienceRay];
    let rayId = e.target.name;
    let experience = experiences.find(({id}) => id === rayId)
    let experienceIndex = experiences.indexOf(experience);
    experience[e.target.id] = e.target.value;
    
    
    experiences[experienceIndex] = experience;
    
    this.setState({
      experienceRay: experiences
    })
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <FormParent basicInfo={this.state.basicInfo} handleInfo = {this.handleInfo} handleExperience={this.handleExperience} experienceRay= {this.state.experienceRay}/>
        {this.state.experienceRay[0].jobTitle}
    
      </header>
    </div>
    )
  }
}

export default App;
