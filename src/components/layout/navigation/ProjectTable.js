import React from "react";

function ProjectTable() {
  return (
    <table class="table ">
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
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProjectTable;
