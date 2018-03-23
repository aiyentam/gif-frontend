import React, { Component } from "react";
import "./Gifs.css";

class CreateGif extends Component {
  render() {
    return (
      <div className="all">
        <div>
          <div>
            <div>
              <h4>Create a New Gif!</h4>
              <div>
                <form onSubmit={this.props.handleSubmit}>
                  <label>Name</label>
                  <input type="text" onChange={this.props.handleChangeName} />
                  <label>Url</label>
                  <input type="text" onChange={this.props.handleChangeUrl} />
                  <button type="submit">submit</button>
                  <a className="linkButton" href="/">
                    exit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateGif;
