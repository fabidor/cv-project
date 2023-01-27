import React from "react";

const ExperienceDisplay = (props) => {
    return(
        <div className="experienceDisplay">
            <div className="jobTitle">{props.experience.jobTitle}</div>
            <div className="companyAndCity">{props.experience.company} {props.experience.city}</div>
            <div className="workDates">{props.experience.from} - {props.experience.to}</div>
            <div className="description">{props.experience.description}</div>
        </div>
    )
}
export default ExperienceDisplay;