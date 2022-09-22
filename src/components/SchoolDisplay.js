import React, {Component} from "react";

class SchoolDisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {school} = this.props;
        return(
            <div className="schoolDisplay">
                <div>{school.school}</div>
                <div>{school.degType}</div>
                <div>{school.field}</div>
                <div>{school.from}-{school.to}</div>

            </div>
        )
    }
}

export default SchoolDisplay;