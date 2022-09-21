import React, {Component} from "react";

class ExtraInfoDisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {basicInfo} = this.props
        return(
            <div>
                <div className = "phone">
                    <div>Phone Number:</div>
                    <div>{basicInfo.phone}</div>
                </div>
                <div className="address">
                    <div>Address:</div>
                    <div>{basicInfo.address}</div>
                </div>
                <div className="email">
                    <div>Email:</div>
                    <div>{basicInfo.email}</div>
                </div>
            </div>
        )
    }
}

export default ExtraInfoDisplay;