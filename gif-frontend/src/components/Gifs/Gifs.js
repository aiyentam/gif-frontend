import React, { Component } from "react";

class Gifs extends Component {
  render() {
    return (
      <div>
        <div class="gifs">
          <div id="modal-create" class="modal">
            <div class="modal-content">
              <h4>Create a New Gif!</h4>
              <div class="row">
                <div class="input-field">
                  <input id="name" type="text" class="validate" />
                  <label for="name">Name</label>
                </div>
                <div class="input-field">
                  <input id="url" type="text" class="validate" />
                  <label for="url">URL</label>
                </div>
                <button class="btn grey center-align" id="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="modal-edit" class="modal">
          <div class="modal-content">
            <h4>Create a New Gif!</h4>
            <div class="row">
              <div class="input-field">
                <input id="name-edit" type="text" class="validate" />
                <label for="name-edit">Name</label>
              </div>
              <div class="input-field">
                <input id="url-edit" type="text" class="validate" />
                <label for="url-edit">URL</label>
              </div>
              <button class="btn grey center-align" id="submit-edit">
                Submit
              </button>
              <button class="btn red center-align" id="delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gifs;
