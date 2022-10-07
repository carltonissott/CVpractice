import React, { useState } from "react";
import EducationModule from "./EducationModule";
import uniqid from "uniqid";

const Education = (props) => {
  //finds id and then deletes the id from the array :)
  const onDeleteHandler = (e) => {
    setEducationModule(
      educationModule.filter((element) => {
        return element !== e;
      })
    );
  };

  const [educationModule, setEducationModule] = useState([uniqid()]);

  const addEducationModule = (e) => {
    e.preventDefault();
    setEducationModule((prevEducation) => {
      return [...prevEducation, uniqid()];
    });
  };

  return (
    <div>
      <hr></hr>
      <h3 className="section-title">EDUCATION:</h3>
      <br></br>
      {educationModule.map((e) => {
        return <EducationModule key={e} id={e} onDelete={onDeleteHandler} />;
      })}
      <button className="button" onClick={addEducationModule}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
