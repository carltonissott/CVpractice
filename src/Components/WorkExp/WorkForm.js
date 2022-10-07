import React, { useState, useRef } from "react";
import uniqid from "uniqid";

const WorkForm = (props) => {
  const [workExp, setWorkExp] = useState(props.passData);

  const [workExpBullets, setWorkExpBullets] = useState(props.passBulletData);

  const addMoreBullets = (e) => {
    e.preventDefault();
    setWorkExpBullets((prevBullets) => {
      return { ...prevBullets, [uniqid()]: "" };
    });
  };

  const bulletHandler = (e) => {
    const bulletID = e.target.id;
    setWorkExpBullets((prevBullets) => {
      return { ...prevBullets, [bulletID]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onUpload(workExp);
    props.onUploadBullets(workExpBullets);
    props.onClick(false);
  };

  const closeHandler = (e) =>{
    props.onClick(false)
  }

  const companyPositionHandler = (e) => {
    setWorkExp({
      ...workExp,
      position: e.target.value,
    });
  };

  const companyNameHandler = (e) => {
    setWorkExp({
      ...workExp,
      companyname: e.target.value,
    });
  };

  const companyLocationHandler = (e) => {
    setWorkExp({
      ...workExp,
      companylocation: e.target.value,
    });
  };

  const tenureHandler = (e) => {
    setWorkExp({
      ...workExp,
      tenure: e.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler} className="form-format">
      <button className="button-close" onClick={props.closeHandler}><img src="https://img.icons8.com/ios/20/000000/delete-sign--v1.png"/></button>
      <label htmlFor="workPosition">Work Position:</label>
      <input
        onChange={companyPositionHandler}
        id="workPosition"
        type="text"
        value={workExp.position}
      ></input>
      <label htmlFor="companyName">Company Name:</label>
      <input
        onChange={companyNameHandler}
        id="companyName"
        type="text"
        value={workExp.companyname}
      ></input>
      <label htmlFor="companyLocation">Company Location:</label>
      <input
        onChange={companyLocationHandler}
        id="companyLocation"
        type="text"
        value={workExp.companylocation}
      ></input>
      <label htmlFor="tenure">Tenure:</label>
      <input
        onChange={tenureHandler}
        id="tenure"
        type="text"
        value={workExp.tenure}
      ></input>
      {Object.keys(workExpBullets).map((e, i) => {
        console.log(workExpBullets);
        return (
          <textarea
            onChange={bulletHandler}
            id={e}
            key={e}
            type="textbox"
            value={workExpBullets[e]}
            placeholder="Work Achievement Here"
            rows="10"
            cols="40"
          ></textarea>
        );
      })}
      <button className="button" onClick={addMoreBullets}>+ Add More Bullets</button>
      <button  className="button" type="submit">Update:</button>
    </form>
  );
};

export default WorkForm;
