import React, {Component} from "react";

class FormParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {handleName, handleTitle, basicInfo} = this.props
        return(
            <div className="form">
                <form>
                    <input type="text" onChange = {handleName} value= {basicInfo.name} />
                    <input type="text" onChange= {handleTitle} value={basicInfo.title} />
                </form>
            </div>
        )
    }
}

export default FormParent;