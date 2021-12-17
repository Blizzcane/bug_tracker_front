import React, { useState } from "react";
import Select from "react-select";
import { createNewProject } from "../../../utils/api";
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
    const abortController = new AbortController();

    createNewProject(formData, abortController.signal)
      .then(() => console.log("sent"))
      .catch(() => console.log("error"));
    setFormData({ members: [], projectName: "" }); //figure out how to reset the option selector

  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setMembers = (e) => {
    e.forEach(({ value }) => {
      if (!formData.members.includes(value)) {
        formData.members.push(value);
      }
    });
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
          name="projectName"
          placeholder="Project name"
          onChange={handleChange}
          value={formData.projectName}
        />
        <Select
          isMulti={true}
          name="members"
          className="basic-multi-select"
          classNamePrefix="select"
          options={members}
          onChange={setMembers}
        />
        {/* fix this stupid selection */}
        <button onClick={createProject}>CREATE NEW PROJECT</button>
      </div>
    </div>
  );
}

export default AddProject;
