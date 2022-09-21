import React, {Component} from "react";
import BasicInfoDisplay from "./basicInfoDisplay.js"
import ExtraInfoDisplay from "./ExtraInfoDisplay.js"
import ResumeBody from "./ResumeBody.js"

class DisplayParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {basicInfo, experienceRay, educationRay} = this.props;
        return(
            <div className="resumeDisplay">
                 <BasicInfoDisplay basicInfo = {basicInfo} />
                 <div className="resumeBody">
                    <div className="leftWing">
                        <ExtraInfoDisplay basicInfo={basicInfo} />
                    </div>
                    <div className="resumeBody">
                        <ResumeBody experiences = {experienceRay} education = {educationRay} />
                    </div>
                 </div>
            </div>
            )
    } 
    
}

export default DisplayParent;