import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import FormParent from "./components/FormParent.js"
import uniqid from "uniqid"
import DisplayParent from "./components/DisplayParent.js"

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
      educationRay:[{
        school: '',
        degType: '',
        field: '',
        from: '',
        to: '',
        id: uniqid()
      }]
    }
    this.handleInfo = this.handleInfo.bind(this);
    this.handleExperience=this.handleExperience.bind(this);
    this.addExperience=this.addExperience.bind(this);
    this.deleteExperience=this.deleteExperience.bind(this);
    this.handleEducation.addEducation= this.handleEducation.addEducation.bind(this);
    this.handleEducation.updateEducation = this.handleEducation.updateEducation.bind(this);
    this.handleEducation.deleteSchool = this.handleEducation.deleteSchool.bind(this);

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

  }


  deleteExperience = (e) =>{
    let experience = this.state.experienceRay.find(({id}) => id === e.target.id
    )
    let experienceIndex=this.state.experienceRay.indexOf(experience);
    let experiences = [...this.state.experienceRay]
    experiences.splice(experienceIndex, 1);
    this.setState({
      experienceRay:experiences
    })
  }
  handleEducation = (() =>{
    const addEducation = () =>{
      const educ =  {
          school: '',
          degType: '',
          field: '',
          from: '',
          to: '',
          id:uniqid()
        }
        this.setState({
          educationRay: this.state.educationRay.concat(educ)
        })
        
      }
      const updateEducation = (e) =>{
        let schools = [...this.state.educationRay];
        let rayId = e.target.name;
        let school = schools.find(({id}) => id === rayId)
        let schoolIndex = schools.indexOf(school);
        school[e.target.id] = e.target.value;
        schools[schoolIndex] = school;
        
        this.setState({
          educationRay: schools
        })
      }
      const deleteSchool = (e) => {
        let school = this.state.educationRay.find(({id}) => id === e.target.id)
    let schoolIndex=this.state.educationRay.indexOf(school);
    let schools = [...this.state.educationRay]
    schools.splice(schoolIndex, 1);
    this.setState({
      educationRay:schools
    })
      }
      return {addEducation, updateEducation, deleteSchool};
      
    })();
  
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <FormParent basicInfo={this.state.basicInfo} handleInfo = {this.handleInfo} handleExperience={this.handleExperience} experienceRay= {this.state.experienceRay} addExperience = {this.addExperience} deleteExperience={this.deleteExperience} handleEducation = {this.handleEducation} educationRay = {this.state.educationRay}/>
        <DisplayParent basicInfo = {this.state.basicInfo} experienceRay={this.state.experienceRay} educationRay={this.state.educationRay} />
    
      </header>
    </div>
    )
  }
}

export default App;
