import React, {Component} from "react";

class ExtraInfoDisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {basicInfo} = this.props
        return(
            <div className="extraInfo">
                <div className = "phone">
                    <div className="subHeading">Phone Number:</div>
                    <div>{basicInfo.phone}</div>
                </div>
                <div className="address">
                    <div className="subHeading">Address:</div>
                    <div>{basicInfo.address}</div>
                </div>
                <div className="email">
                    <div className="subHeading">Email:</div>
                    <div>{basicInfo.email}</div>
                </div>
            </div>
        )
    }
}

export default ExtraInfoDisplay;