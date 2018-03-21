import React, { Component } from "react";
import "./Gifs.css";

class EditGif extends Component {
  render() {
    return (
      <div className="all">
        <div>
          <div>
            <h4>Edit a New Gif!</h4>
            <div>
              <form onSubmit={this.props.handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={this.props.handleChangeName} />
                <label>Url</label>
                <input type="text" onChange={this.props.handleChangeUrl} />
                <button type="submit">Submit</button>
                <button type="submit" className="textdeco">
                  <a href="/">Cancel</a>
                </button>
                <button type="submit">Delete</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditGif;
