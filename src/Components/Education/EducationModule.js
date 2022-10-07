import React, { useState } from "react";
import EducationForm from "./EducationForm";
import Modal from "../UI/Modal";
import uniqid from "uniqid";

const EducationModule = (props) => {
  const [editForm, setEditForm] = useState(false);
  const onEditHandler = () => {
    setEditForm(true);
  };

  const [educationInfo, setEducationInfo] = useState({
    degree: "Business Administration: Finance",
    GPA: '3.85',
    university: "University of Florida",
    universitylocation: "Gainesville, Fl",
    tenure: "August 2018 - May 2022",
  });

  const deleteHandler = (e) => {
    e.preventDefault();
    props.onDelete(props.id);
  };

  const getDataHandler = (e) => {
    setEducationInfo(e);
  };

  return (
    <div>
      {editForm && (
        <Modal>
          <EducationForm
            passData={educationInfo}
            onUpload={getDataHandler}
            onClick={setEditForm}
          />
        </Modal>
      )}
      <div className="work-module">
        <div className="work-content">
          <span className="inline-justified">
            <span className="inline">
              <h3 className="subtitle italics">{educationInfo.degree}, </h3>
              <h3 className="subtitle bold">{educationInfo.university}</h3>
            </span>
            <h3 className="subtitle">{educationInfo.tenure}</h3>
          </span>
          <h3 className="subtitle">{educationInfo.universitylocation}</h3>
          <h3 className="subtitle">GPA: {educationInfo.GPA}</h3>
        </div>
        <div className="buttons">
          <button className="button" onClick={onEditHandler}>
            Edit Education
          </button>
          <button className="button-delete" onClick={deleteHandler}>
            Delete Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationModule;
