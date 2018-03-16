import React, { Component } from "react";
import Gifs from "./gifs";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        {
          name: "",
          imgUrl: ""
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <nav>
          <div>
            <a href="https://giphy.com/">GAphy</a>
            <button>+</button>
          </div>
        </nav>
        <Gifs />
      </div>
    );
  }
}

export default Nav;
