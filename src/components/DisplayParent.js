import React, {Component} from "react";
import BasicInfoDisplay from "./basicInfoDisplay.js"
import ExtraInfoDisplay from "./ExtraInfoDisplay.js"
import ResumeBody from "./ResumeBody.js"

/*class DisplayParent extends Component{
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
                        <ResumeBody experiences = {experienceRay} education = {educationRay} />
                    
                 </div>
            </div>
            )
    } 
    
} */

const DisplayParent = (props) =>{
    return(
        <div className="resumeDisplay">
             <BasicInfoDisplay basicInfo = {props.basicInfo} />
             <div className="resumeBody">
                <div className="leftWing">
                    <ExtraInfoDisplay basicInfo={props.basicInfo} />
                </div>
                    <ResumeBody experiences = {props.experienceRay} education = {props.educationRay} />
                
             </div>
        </div>
        )
}

export default DisplayParent;