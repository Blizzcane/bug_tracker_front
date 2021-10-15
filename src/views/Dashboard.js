import React, { useState } from "react";
import Navbar from "../components/layout/navigation/Navbar";
import FilterBar from "../components/layout/navigation/FilterBar";
import ProjectTable from "../components/layout/navigation/ProjectTable";
import "./Dashboard.css";

function Dashboard() {
  const test = [
    {
      name: "Kate",
      bugs: 2,
      Members: "dfas",
      Admin: "noone",
    },
    {
      name: "John",
      bugs: 3,
      Members: "dfas",
      Admin: "noone",
    },
  ];

  const [projects, setProjects] = useState(test);

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
