import React, { useState } from "react";
import Select from "react-select";
import "./AddProject.css";

function AddProject({ setOpenModal }) {
  const [formData, setFormData] = useState({ members: [], projectName: "" });

  const members = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "lemon", label: "Lemon" },
  ];

  const createProject = (e) => {
    e.preventDefault();
    setFormData("aaa");

    console.log(formData);
  };

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      projectName: target.value,
    });
    console.log(formData);
  };

  return (
    <div className="overlay">
      <div className="addProject">
        <button onClick={() => setOpenModal(false)} id="closeBtn">
          x
        </button>

        <h3>Add a new project</h3>
        <input
          type="text"
          placeholder="Project name"
          onChange={handleChange}
          value={formData.projectName}
        />
        <Select
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          options={members}
          value={formData.members}
        />

        <button onClick={createProject}>CREATE NEW PROJECT</button>
      </div>
    </div>
  );
}

export default AddProject;
