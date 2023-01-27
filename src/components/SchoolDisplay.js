import React from "react";



const SchoolDisplay = (props) =>{
    return(
        <div className="schoolDisplay">
            <div className="schoolName">{props.school.school}</div>
            <div className="degree">{props.school.degType} {props.school.field} </div>
            <div className="schoolDates">{props.school.from}-{props.school.to}</div>
        </div>
    )
}

export default SchoolDisplay;