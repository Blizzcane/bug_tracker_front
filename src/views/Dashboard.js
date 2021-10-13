import React from "react";
import Navbar from "../components/layout/navigation/Navbar";
import FilterBar from "../components/layout/navigation/FilterBar"
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Dash will go here</h1>
       <FilterBar />
    </div>
  );
}

export default Dashboard;
