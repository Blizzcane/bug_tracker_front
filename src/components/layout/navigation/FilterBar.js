import React from "react";
import "./FilterBar.css";

const filterProjects = () => {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL"); 
  li = ul.getElementsByTagName("li");  

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

const sortList = () => {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < b.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
};

function FilterBar() {
  return (
    <div>
      <input
        type="text"
        id="myInput"
        onKeyUp={filterProjects}
        placeholder="Search for projects.."
      />
      <button id="addProject" onClick={sortList} type="button">
        Add Project
      </button>
      <ul id="myUL">
        <li>
          <a href="#">Adele</a>
        </li>

        <li>
          <a href="#">Billy</a>
        </li>
        <li>
          <a href="#">Agnes</a>
        </li>
        <li>
          <a href="#">Bob</a>
        </li>

        <li>
          <a href="#">Calvin</a>
        </li>
        <li>
          <a href="#">Christina</a>
        </li>
        <li>
          <a href="#">Cindy</a>
        </li>
      </ul>
    </div>
  );
}

export default FilterBar;
