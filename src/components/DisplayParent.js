import React, {Component} from "react";
import BasicInfoDisplay from "./basicInfoDisplay.js"

class DisplayParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {basicInfo, experienceRay, educationRay} = this.props;
        return(
            <div className="resumeDisplay">
                 <BasicInfoDisplay basicInfo = {basicInfo} />
            </div>
            )
    } 
    
}

export default DisplayParent;