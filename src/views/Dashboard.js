import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/navigation/Navbar";
import FilterBar from "../components/layout/navigation/FilterBar";
import ProjectTable from "../components/layout/navigation/ProjectTable";
import "./Dashboard.css";
import { loadProjects } from "../utils/api";
import AddProject from "../components/layout/navigation/AddProject";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [projectErrors, setProjectErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    loadProjects(abortController.signal)
      .then(setProjects)
      .catch(setProjectErrors);
  }, []);

  const toggleModal  = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Navbar /> 
      {showModal ? <AddProject toggleModal={toggleModal} /> : null}

      <h2>All Projects </h2>
      <h4>List of all the created or joined projects</h4>
      <FilterBar projects={projects} setProjects={setProjects} />
      <button id="addProject" onClick={toggleModal} type="button">
        Add Project
      </button>
      <ProjectTable projects={projects} />
    </div>
  );
}

export default Dashboard;
