import React from "react";

function ProjectTable({ projects }) {
  const tableData = (
    <tbody>
      <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  );

  const tableRow = projects.map((project) => {
    return (
      <tr>
        <td>{project.name}</td>
        <td>{project.bugs}</td>
        <td>{project.members}</td>
        <td>{project.admin}</td> 
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
