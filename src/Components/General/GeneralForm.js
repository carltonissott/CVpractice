import React, { useState } from "react";

const GeneralForm = (props) => {


  const submitHandler = (e) => {
    e.preventDefault()
    props.onSubmit(generalInfo);
    props.onButtonClick(false)
    console.log(generalInfo);

  };

  const [generalInfo, setGeneralInfo] = useState(props.initialData);

  const nameChangeHandler = (e) => {
    setGeneralInfo({
      ...generalInfo,
      name: e.target.value,
    });
  };

  const phoneChangeHandler = (e) => {
    setGeneralInfo({
      ...generalInfo,
      phone: e.target.value,
    });
  };
  const emailChangeHandler = (e) => {
    setGeneralInfo({
      ...generalInfo,
      email: e.target.value,
    });
  };

  return (
    
    <form onSubmit={submitHandler} className="form-format">
      <label htmlFor="name">Name: </label>
      <input
        value={generalInfo.name}
        onChange={nameChangeHandler}
        id="name"
        type="text"
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        value={generalInfo.email}
        onChange={emailChangeHandler}
        id="email"
        type="email"
      ></input>
      <label htmlFor="phone">Phone:</label>
      <input
        value={generalInfo.phone}
        onChange={phoneChangeHandler}
        id="phone"
        type="text"
      ></input>
      <button className="button">Update!</button>
    </form>
  );
};

export default GeneralForm;
