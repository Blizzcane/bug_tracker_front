import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/navigation/Navbar";
import FilterBar from "../components/layout/navigation/FilterBar";
import ProjectTable from "../components/layout/navigation/ProjectTable";
import "./Dashboard.css";
import { loadProjects } from "../utils/api";

function Dashboard() {
  const test = [
    {
      name: "Kate",
      bugs: 2,
      members: "dfas",
      admin: "noone",
    },
    {
      name: "John",
      bugs: 3,
      members: "afds",
      admin: "someone",
    },
  ];

  const [projects, setProjects] = useState(test);

  useEffect(() => {
    const abortController = new AbortController();
    loadProjects(abortController.signal).then(setProjects);
  }, []);

  console.log(projects);

  return (
    <div>
      <Navbar />
      <h1>Dash will go here</h1>
      <FilterBar projects={projects} setProjects={setProjects} />
      <ProjectTable projects={projects} />
    </div>
  );
}

export default Dashboard;
