import React, {Component} from "react";

class FormParent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {handleInfo, basicInfo} = this.props
        return(
            <div className="form">
                <form>
                    <input type="text" id="name" onChange = {handleInfo} value= {basicInfo.name} />
                    <input type="text" id="title" onChange= {handleInfo} value={basicInfo.title} />
                </form>
            </div>
        )
    }
}

export default FormParent;