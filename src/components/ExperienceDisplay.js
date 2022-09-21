import React, {Component} from "react";

class ExperienceDisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {experience} = this.props
        return(
            <div className="experienceDisplay">
                <div>{experience.company}</div>
                <div>{experience.jobTitle}</div>
                <div>{experience.city}</div>
                <div>{experience.from} - {experience.to}</div>
                <div>{experience.description}</div>
            </div>
        )
    }
}
export default ExperienceDisplay;