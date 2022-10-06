import React, {Component} from "react";

class ExperienceDisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {experience} = this.props
        return(
            <div className="experienceDisplay">
                <div className="jobTitle">{experience.jobTitle}</div>
                <div className="companyAndCity">{experience.company} {experience.city}</div>
                <div className="workDates">{experience.from} - {experience.to}</div>
                <div className="description">{experience.description}</div>
            </div>
        )
    }
}
export default ExperienceDisplay;