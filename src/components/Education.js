import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{handleEducation, education} = this.props;
        return(
            <form>
                <input type="text" name={education.id} id="school" onChange={handleEducation.updateEducation} value={education.school} placeholder="School"/>
                <input type="text" name={education.id} id="degType" onChange={handleEducation.updateEducation} value={education.degType} placeholder="Degree Type" />
                <input type="text" name={education.id} id="field" onChange={handleEducation.updateEducation} value={education.field} placeholder="Field of Study" />
                <input type="text" name={education.id} id="from" onChange={handleEducation.updateEducation} value={education.from} placeholder="From (Year)" />
                <input type="text" name={education.id} id="to" onChange={handleEducation.updateEducation} value={education.to} placeholder="To (Year)" />
                <button onClick = {handleEducation.deleteSchool} id={education.id}> Delete School </button>
            </form>
        )

    }
}
export default Education;