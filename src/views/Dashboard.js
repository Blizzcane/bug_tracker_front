import React from "react";
import Navbar from "../components/layout/navigation/Navbar";
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Dash will go here</h1>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
