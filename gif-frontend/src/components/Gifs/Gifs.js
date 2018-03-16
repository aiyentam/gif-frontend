import React, { Component } from "react";
import "./Gifs.css";

class Gifs extends Component {
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
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
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
              </form>
              <button type="submit">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gifs;
