import React from "react";
import ReactDom from "react-dom";
import "./AddProject.css";

function AddProject({ toggleModal }) {
  return ReactDom.createPortal(
    <div className="overlay">
      <div className="addProject">
        <h2>Add a new project</h2>
        <input type="text" placeholder="Project Name" />
        {/* add members selection */}
        <select name="select-members" id="select-members">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button className="close" onClick={toggleModal} type="button">
          x
        </button>
        <button className="create"  type="button">
          Create New Project
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddProject;
