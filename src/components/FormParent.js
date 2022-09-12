import React, {Component} from "react";
import Experience from "./Experience.js"


class FormParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {handleInfo, basicInfo, handleExperience, experienceRay} = this.props
        return(
            <div className="form">
                <form>
                    <input type="text" id="name" onChange = {handleInfo} value= {basicInfo.name} placeholder = "Name:" />
                    <input type="text" id="title" onChange= {handleInfo} value={basicInfo.title} placeholder= "Title:" />
                    <input type="text" id="phone" onChange={handleInfo} value={basicInfo.phone} placeholder= "Phone Number:" />
                    <input type="text" id="address" onChange={handleInfo} value={basicInfo.address} placeholder= "Address: " />
                    <input type="email" id="email" onChange={handleInfo} value={basicInfo.email} placeholder="Email: "/>
                </form>
                <div>
                   { experienceRay.map(experienceObj => {
                    return(
                        <div key = {experienceObj.id}>
                        <Experience handleExperience={handleExperience} experience={experienceObj} />
                        <button>Remove Experience</button>
                    </div>
                    )
                    
                        
                    })}
                    
                    
                </div>
                <button>Add Experience</button>
                
            </div>
        )
    }
}

export default FormParent;