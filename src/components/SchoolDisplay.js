import React, {Component} from "react";

class SchoolDisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {school} = this.props;
        return(
            <div className="schoolDisplay">
                <div className="schoolName">{school.school}</div>
                <div className="degree">{school.degType} {school.field} </div>
                <div className="schoolDates">{school.from}-{school.to}</div>
            </div>
        )
    }
}

export default SchoolDisplay;