import React, {Component} from "react";
import Experience from "./Experience.js"
import Education from "./Education.js"


class FormParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {handleInfo, basicInfo, handleExperience, experienceRay, addExperience, deleteExperience, handleEducation, educationRay} = this.props
        return(
            <div className="formBox">
                <div className="formTitle">Basic Information:</div>
                <form className="form">
                    
                    <input type="text" id="name" onChange = {handleInfo} value= {basicInfo.name} placeholder = "Name:" />
                    <input type="text" id="title" onChange= {handleInfo} value={basicInfo.title} placeholder= "Title:" />
                    <input type="text" id="phone" onChange={handleInfo} value={basicInfo.phone} placeholder= "Phone Number:" />
                    <input type="text" id="address" onChange={handleInfo} value={basicInfo.address} placeholder= "Address: " />
                    <input type="email" id="email" onChange={handleInfo} value={basicInfo.email} placeholder="Email: "/>
                </form>
                <div className="expandingBox">
                    <div className="formTitle">Relevant Experience:</div>
                   { experienceRay.map(experienceObj => {
                    return(
                        <div key = {experienceObj.id} className="expandingForm">
                        <Experience handleExperience={handleExperience} experience={experienceObj} deleteExperience = {deleteExperience}/>
                    </div>
                    )
                    
                        
                    })}
                    
                    
                </div>
                <button className="addBtn" onClick = {addExperience}>Add Experience</button>
                <div className="expandingBox">
                    <div className="formTitle">Education:</div>
                    {educationRay.map(educationObj =>{
                        return(
                            <div key={educationObj.id} className="expandingForm">
                                <Education handleEducation={handleEducation} education = {educationObj} />
                                </div>)
                    })}
                </div>
                <button className="addBtn" onClick = {handleEducation.addEducation}>Add Education</button>
                
            </div>
        )
    }
}

export default FormParent;