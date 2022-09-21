import React, {Component} from "react";

class BasicInfoDisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {basicInfo} = this.props
        return(
            <div className="basicInfo">
                <div id="nameDisplay">{basicInfo.name}</div>
                <div id="title">{basicInfo.title}</div>
            </div>
        )
    }
}

export default BasicInfoDisplay;