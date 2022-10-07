import React, { useState, useRef } from "react";
import uniqid from "uniqid";

const EducationForm = (props) => {
  const [educationExp, setEducationExp] = useState(props.passData);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onUpload(educationExp);
    props.onClick(false);
  };

  const closeHandler = (e) => {
    props.onClick(false);
  };

  const degreeHandler = (e) => {
    setEducationExp({
      ...educationExp,
      degree: e.target.value,
    });
  };

  const universityHandler = (e) => {
    setEducationExp({
      ...educationExp,
      university: e.target.value,
    });
  };

  const universityLocationHandler = (e) => {
    setEducationExp({
      ...educationExp,
      universitylocation: e.target.value,
    });
  };

  const tenureHandler = (e) => {
    setEducationExp({
      ...educationExp,
      tenure: e.target.value,
    });
  };
  const GPAHandler = (e) => {
    setEducationExp({
      ...educationExp,
      GPA: e.target.value,
    });
  };

  return (
    <>
      <button className="button-close" onClick={closeHandler}>
        <img src="https://img.icons8.com/ios/20/000000/delete-sign--v1.png" />
      </button>
      <form onSubmit={submitHandler} className="form-format">
        <label htmlFor="educationPosition">Education Degree:</label>
        <input
          onChange={degreeHandler}
          id="educationPosition"
          type="text"
          value={educationExp.degree}
        ></input>
        <label htmlFor="universityName">University Name:</label>
        <input
          onChange={universityHandler}
          id="universityName"
          type="text"
          value={educationExp.university}
        ></input>
        <label htmlFor="universityLocation">University Location:</label>
        <input
          onChange={universityLocationHandler}
          id="universityLocation"
          type="text"
          value={educationExp.universitylocation}
        ></input>
        <label htmlFor="tenure">Tenure:</label>
        <input
          onChange={tenureHandler}
          id="tenure"
          type="text"
          value={educationExp.tenure}
        ></input>
        <label htmlFor="GPA">Tenure:</label>
        <input
          onChange={GPAHandler}
          id="GPA"
          type="text"
          value={educationExp.GPA}
        ></input>
        <button className="button" type="submit">
          Update:
        </button>
      </form>
    </>
  );
};

export default EducationForm;
