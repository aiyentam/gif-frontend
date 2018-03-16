import React, { Component } from "react";
import Gifs from "../Gifs/Gifs";
import "./Nav.css";
import axios from "axios";

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
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value.toLowerCase() });
  }

  handleChangeUrl(event) {
    this.setState({ imgUrl: event.target.value.toLowerCase() });
  }

  handleSubmit(event) {
    alert("You submitted a Gif!");
    event.preventDefault();
    const uploadedImg = {
      name: this.state.gifs.name,
      imgUrl: this.state.gifs.imgUrl
    };

    axios.post("http://localhost:3000/gifs", { uploadedImg }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/")
      .then(res => {
        const gifs = res.data;
        this.setState({ gifs });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="https://giphy.com/" className="logo">
              GAphy
            </a>
            <button className="btn">+</button>
          </div>
        </nav>
        <Gifs
          handleChangeUrl={this.handleChangeUrl}
          handleChangeName={this.handleChangeName}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Nav;
