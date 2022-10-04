import React from "react";
import '../styles.css'

const EducationalInformation = (props)=>{

    return(
        <div>
           <hr></hr>
           <h3>EDUCATION</h3>
           <div className="education">
            <div>
                <h4 id="degree">{props.education.degree}</h4>
                <h4>{props.education.location}</h4>
                <h4>GPA: {props.education.GPA}</h4>
            </div>
                <h4 id="year">{props.education.year}</h4>
           </div>
           
     
        </div>
    )
}

export default EducationalInformation