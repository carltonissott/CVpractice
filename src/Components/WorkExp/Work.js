import React, { useState } from "react";
import WorkModule from "./WorkModule";
import uniqid from "uniqid";

const Work = (props) => {
  //finds id and then deletes the id from the array :)
  const onDeleteHandler = (e) => {
    setWorkModule(
      workModule.filter((element) => {
        return element !== e;
      })
    );
  };

  const [workModule, setWorkModule] = useState([uniqid()]);

  const addWorkModule = (e) => {
    e.preventDefault();
    setWorkModule((prevWork) => {
      return [...prevWork, uniqid()];
    });
  };

  return (
    <div>
      <hr></hr>
      <h3 className="section-title">EXPERIENCE:</h3>
      <br></br>
      {workModule.map((e) => {
        return <WorkModule key={e} id={e} onDelete={onDeleteHandler} />;
      })}
      <button className="button" onClick={addWorkModule}>
        Add Work
      </button>
    </div>
  );
};

export default Work;
