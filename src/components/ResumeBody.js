import React, {Component} from "react"
import ExperienceDisplay from "./ExperienceDisplay"

class ResumeBody extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{experiences, education} = this.props
        return(
            <div>
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
                

            </div>
        )
    }
}

export default ResumeBody