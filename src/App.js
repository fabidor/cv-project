import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from "react";
import FormParent from "./components/FormParent.js"
import uniqid from "uniqid"
import DisplayParent from "./components/DisplayParent.js"
import './components/styles.css'

/*class App extends Component{
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
        <FormParent basicInfo={this.state.basicInfo} handleInfo = {this.handleInfo} handleExperience={this.handleExperience} experienceRay= {this.state.experienceRay} addExperience = {this.addExperience} deleteExperience={this.deleteExperience} handleEducation = {this.handleEducation} educationRay = {this.state.educationRay}/>
        <DisplayParent basicInfo = {this.state.basicInfo} experienceRay={this.state.experienceRay} educationRay={this.state.educationRay} />
    
      
    </div>
    )
  }
  
} */

const App = () => {
  const [basicInfo, updateInfo] = useState(
    {name: '',
      phone:'',
      title:'',
      address:'',
      email: ''})
  const [experienceRay, updateExperience] = useState([{
    jobTitle: '',
    company: '',
    city: '',
    from: '',
    to: '',
    description: '',
    id: uniqid()
  }])
  const [educationRay, updateSchool] = useState(
    [{
      school: '',
      degType: '',
      field: '',
      from: '',
      to: '',
      id: uniqid()
    }]
  )

  const handleInfo = (e) =>{
    updateInfo({
      ...basicInfo,
      [e.target.id]: e.target.value
       }
     )
  }
  const handleExperience=(e) =>{
    let experiences = experienceRay;
    
    let rayId = e.target.name;
    let experience = experiences.find(({id}) => id === rayId)
    let experienceIndex = experiences.indexOf(experience);
    experience[e.target.id] = e.target.value;
    experiences[experienceIndex] = experience;
    updateExperience(
       [...experiences]
    )
  }
  
  const addExperience = () => {
    const exp =  {
      jobTitle:"",
      company:'',
      city:'',
      from:'',
      to:'',
      description:'',
      id:uniqid()
    }
    updateExperience(
      [...experienceRay.concat(exp)] //be wary of this?
    )
  }
  const deleteExperience = (e) =>{
    let experience = experienceRay.find(({id}) => id === e.target.id
    )
    let experienceIndex=experienceRay.indexOf(experience);
    let experiences = [...experienceRay]
    experiences.splice(experienceIndex, 1);
    updateExperience(
      [...experiences]
    )
  }
  const handleEducation = (() =>{
    const addEducation = () =>{
      const educ =  {
          school: '',
          degType: '',
          field: '',
          from: '',
          to: '',
          id:uniqid()
        }
        updateSchool(
          [...educationRay.concat(educ)]
        )
        
      }
      const updateEducation = (e) =>{
        let schools = [...educationRay];
        let rayId = e.target.name;
        let school = schools.find(({id}) => id === rayId)
        let schoolIndex = schools.indexOf(school);
        school[e.target.id] = e.target.value;
        schools[schoolIndex] = school;
        
        updateSchool(
          [...schools]
        )
      }
      const deleteSchool = (e) => {
        let school = educationRay.find(({id}) => id === e.target.id)
    let schoolIndex=educationRay.indexOf(school);
    let schools = [...educationRay]
    schools.splice(schoolIndex, 1);
    updateSchool(
      [...schools]
    )
      }
      return {addEducation, updateEducation, deleteSchool};
      
    })();
    return(
      <div className="App">
        <FormParent basicInfo={basicInfo} handleInfo = {handleInfo} handleExperience={handleExperience} experienceRay= {experienceRay} addExperience = {addExperience} deleteExperience={deleteExperience} handleEducation = {handleEducation} educationRay = {educationRay}/>
        <DisplayParent basicInfo = {basicInfo} experienceRay={experienceRay} educationRay={educationRay} />
    
      
    </div>
    )
}

export default App;
