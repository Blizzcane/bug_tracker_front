import React from "react"; 
import "./AddProject.css";

function AddProject({ closeModal }) {
  return (
    <div className="overlay ">
      <div className="addProject">
        <button
          type="button"
          onClick={() => closeModal(false)}
          className="btn btn-secondary"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddProject;
