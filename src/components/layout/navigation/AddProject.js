import React from "react";
import ReactDom from "react-dom";
import "./AddProject.css";

function AddProject({ toggleModal }) {
  return ReactDom.createPortal(
    <div className="overlay">
      <div className="addProject">
        <h5 class="modal-title">Add a new project</h5>

        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">
              Recipient:
            </label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">
              Message:
            </label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onClick={toggleModal}>
            Close
          </button>

          <button type="button" class="btn btn-primary">
            Create New Project
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddProject;
