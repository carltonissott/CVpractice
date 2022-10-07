import React, { useState } from "react";
import Modal from "../UI/Modal";
import GeneralForm from "./GeneralForm";

const GeneralInformation = (props) => {
  const [editForm, setEditForm] = useState(false);
  const onEditHandler = () => {
    setEditForm(true);
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: "Carlton Issott",
    email: "carltonvatsim@gmail.com",
    phone: "321-544-0711",
  });

  const generalInformationHandler = (e) => {
    setGeneralInfo(e);
  };

  return (
    <div className="general-info">
      {editForm && (
        <Modal>
          <GeneralForm
            onButtonClick={setEditForm}
            initialData={generalInfo}
            onSubmit={generalInformationHandler}
          />
        </Modal>
      )}
      <h3 id="name">{generalInfo.name}</h3>
      <h3 className="subtitle">{generalInfo.email}</h3>
      <h3 className="subtitle">{generalInfo.phone}</h3>

      <button className="button" onClick={onEditHandler}>
        Edit Data
      </button>
    </div>
  );
};

export default GeneralInformation;
