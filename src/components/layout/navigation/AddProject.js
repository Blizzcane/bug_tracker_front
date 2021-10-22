import React from "react";
import ReactDom from "react-dom";
import "./AddProject.css";

function AddProject( {closeModal}) {
  return (
    <div className="modalBackground">
      <div className="modelContainer"><button type="button" onClick={closeModal} className="btn btn-secondary" >Close</button></div>
      
    </div>
  );
}

export default AddProject;
