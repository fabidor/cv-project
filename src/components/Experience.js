import React, {Component} from "react";

class Experience extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{experience, handleExperience, deleteExperience} = this.props
        return(
            <form className="form">
                <input type="text" name={experience.id} id="jobTitle" onChange={handleExperience} value={experience.jobTitle} placeholder="Job Title:" />
                <input type="text" name={experience.id} id="company" onChange={handleExperience} value={experience.company} placeholder="Company: " />
                <input type="text" name={experience.id} id="city" onChange={handleExperience} value={experience.city} placeholder="City:"/>
                <input type="text" name={experience.id} id="from" onChange={handleExperience} value={experience.from} placeholder="From:" />
                <input type="text" name={experience.id} id="to" onChange={handleExperience} value={experience.to} placeholder="To: " />
                <input type="text" name={experience.id} id="description" onChange={handleExperience} value={experience.description} placeholder="Description: " />
                <button onClick ={deleteExperience} id={experience.id}>Remove Experience</button>
            </form>
            
        )
    }

}

export default Experience;