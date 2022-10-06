import React, {Component} from "react"
import ExperienceDisplay from "./ExperienceDisplay.js"
import SchoolDisplay from "./SchoolDisplay.js"

class ResumeBody extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{experiences, education} = this.props
        return(
            <div className="centralDetails">
                <div className="experiences">
                    <div className="title">Work Experience:</div>
                    {experiences.map(experience => {
                        return(
                            <div key = {experience.id}>
                                <ExperienceDisplay experience = {experience} />
                                </div>
                        )
                    })}
                </div>
                <div className="schools">
                    <div className="title">Education:</div>
                    {education.map(school =>{
                        return(
                            <div key={school.id}>
                                <SchoolDisplay school = {school} />
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default ResumeBody