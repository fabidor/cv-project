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
    this.addExperience=this.addExperience.bind(this);

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
  addExperience = () => {
    const exp =  {
      jobTitle:"",
      company:'',
      city:'',
      from:'',
      to:'',
      description:'',
      id:uniqid()
    }
    this.setState({
      experienceRay: this.state.experienceRay.concat(exp)
    })
    console.log(exp)
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <FormParent basicInfo={this.state.basicInfo} handleInfo = {this.handleInfo} handleExperience={this.handleExperience} experienceRay= {this.state.experienceRay} addExperience = {this.addExperience}/>
      
    
      </header>
    </div>
    )
  }
}

export default App;
