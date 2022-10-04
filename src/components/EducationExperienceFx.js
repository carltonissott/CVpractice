import React from "react";
import '../styles.css'

const EducationalInformation = (props)=>{
    const{education} = props;

    return(
        <div>
           <hr></hr>
           <h3>EDUCATION</h3>
           <div className="education">
            <div>
                <h4 id="degree">{education.degree}</h4>
                <h4>{education.location}</h4>
                <h4>GPA: {education.GPA}</h4>
            </div>
                <h4 id="year">{education.year}</h4>
           </div>
           
     
        </div>
    )
}

export default EducationalInformation