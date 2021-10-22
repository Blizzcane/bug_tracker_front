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
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    loadProjects(abortController.signal)
      .then(setProjects)
      .catch(setProjectErrors);
  }, []);

  return (
    <div>
      <Navbar />
      {openModal && <AddProject closeModal={() => setProjectErrors(false)}/>}
      <div>
        <h2>All Projects </h2>
        <h5>List of all the created or joined projects</h5>
      </div>

      <FilterBar projects={projects} setProjects={setProjects} />
      <button id="addProject" onClick={() => setOpenModal(true)} type="button">
        Add Project
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Open modal for @mdo
      </button>

      <ProjectTable projects={projects} />
    </div>
  );
}

export default Dashboard;
