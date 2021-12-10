import React from "react";
import Select from "react-select";
import "./AddProject.css";

function AddProject({ setOpenModal }) {
  const members = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "lemon", label: "Lemon" },
  ];

  return (
    <div className="overlay">
      <div className="addProject">
        <button onClick={() => setOpenModal(false)} id="closeBtn">
          x
        </button>
        
        <h3>Add a new project</h3>
        <input type="text" placeholder="Project name" />
        <Select
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          options={members}
        />

        <button>CREATE NEW PROJECT</button>
      </div>
    </div>
  );
}

export default AddProject;
