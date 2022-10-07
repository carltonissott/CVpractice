import React, { useState } from "react";
import WorkForm from "./WorkForm";
import Modal from "../UI/Modal";
import uniqid from "uniqid";

const WorkModule = (props) => {
  const [editForm, setEditForm] = useState(false);
  const onEditHandler = () => {
    setEditForm(true);
  };

  const [workBullets, setWorkBullets] = useState({
    test1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tortor rutrum, cursus dolor eu.",
    test2:
      "Nam vel varius metus. Donec aliquet eget nibh ut volutpat. Mauris semper gravida purus, sed finibus enim rhoncus eget. Vivamus rhoncus hendrerit velit",
    test3:
      "Donec velit diam, pharetra maximus congue sit amet, convallis eget ante. Phasellus maximus tortor et feugiat pharetra. Morbi nec eleifend ex",
  });

  const [workInfo, setWorkInfo] = useState({
    position: "Chief Executive Officer",
    companyname: "Unorthodox3D",
    companylocation: "Gainesville, Fl",
    tenure: "August 2020 - Present",
  });

  const deleteHandler = (e) => {
    e.preventDefault();
    props.onDelete(props.id);
  };

  const getDataHandler = (e) => {
    setWorkInfo(e);
  };

  const getBulletsHandler = (e) => {
    setWorkBullets(e);
  };

  return (
    <div>
      {editForm && (
        <Modal>
          <WorkForm
            passData={workInfo}
            passBulletData={workBullets}
            onUpload={getDataHandler}
            onUploadBullets={getBulletsHandler}
            onClick={setEditForm}
          />
        </Modal>
      )}
      <div className="work-module">
        <div className="work-content">
          <span className="inline-justified">
            <span className="inline">
              <h3 className="subtitle italics">{workInfo.position}, </h3>
              <h3 className="subtitle bold">{workInfo.companyname}</h3>
            </span>
            <h3 className="subtitle">{workInfo.tenure}</h3>
          </span>
          <h3 className="subtitle">{workInfo.companylocation}</h3>
          <ul>
            {Object.keys(workBullets).map((e, i) => {
              return <li key={i}>{workBullets[e]}</li>;
            })}
          </ul>
        </div>
        <div className="buttons">
          <button className="button" onClick={onEditHandler}>
            Edit Job
          </button>
          <button className="button-delete" onClick={deleteHandler}>
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkModule;
