import React from "react";

function ProjectTable({ projects }) {
 
  //map project data to table HTML
  const tableRow = projects.map((project) => {
    return (
      <tr>
        <td>{project.project_name}</td>
        <td>{project.bugs}</td>
        <td>{project.members}</td>
        <td>{project.createdById}</td> 
      </tr>
    );
  });

  return (
    <table class="table " id="projectTable">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Bugs</th>
          <th scope="col">Members</th>
          <th scope="col">Admin</th>
          <th scope="col">Added</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </table>
  );
}

export default ProjectTable;
