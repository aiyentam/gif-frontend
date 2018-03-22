import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import axios from "axios";
import "./App.css";
import CreateGif from "../Gifs/CreateGif";
import EditGif from "../Gifs/EditGif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: {
        name: "",
        imgUrl: ""
      },
      gifs: [],
      succeeded: false
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      gif: { ...this.state.gif, name: event.target.value }
    });
  }

  handleChangeUrl(event) {
    this.setState({
      gif: { ...this.state.gif, imgUrl: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const uploadedImg = {
      name: this.state.gif.name,
      imgUrl: this.state.gif.imgUrl
    };

    axios.post("http://localhost:3001/gifs", { uploadedImg }).then(res => {
      console.log(res.data);
      var newArray = this.state.gifs.slice();
      newArray.push({ name: res.data.name, imgUrl: res.data.url });
      this.setState({ gifs: newArray });
      console.log(this.state.gifs);
    });
  }

  handleDelete(event) {
    const objectId = this.state.gifs[event.target.value]._id;
    console.log(objectId);

    axios.delete("http://localhost:3001/gifs/" + objectId).then(res => {
      const gifs = res.data;
      this.setState({ gifs: gifs });
      console.log(this.state.gifs.length);
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/gifs")
      .then(res => {
        const gifs = res.data;
        this.setState({ gifs: gifs });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div className="body">
          <div className="nav-wrapper">
            <a href="https://giphy.com/" className="logo">
              GAphy
            </a>
            <Link to="/create">
              <button>add</button>
            </Link>
          </div>
          <Switch>
            <Route
              path="/create"
              render={props => {
                return (
                  <CreateGif
                    handleChangeUrl={this.handleChangeUrl}
                    handleChangeName={this.handleChangeName}
                    handleSubmit={this.handleSubmit}
                  />
                );
              }}
            />
            <Route
              path="/edit"
              render={props => {
                return (
                  <EditGif
                    handleChangeUrl={this.handleChangeUrl}
                    handleChangeName={this.handleChangeName}
                    handleSubmit={this.handleSubmit}
                  />
                );
              }}
            />
          </Switch>
          <div className="uploads">
            <h4>Uploaded Gifs</h4>
            <div>
              {this.state.gifs.map((gif, index) => {
                return (
                  <div key={index} className="imgs">
                    <img src={gif.url} alt="gif" className="gif" />
                    <span className="gifTitle">{gif.name}</span>
                    <Link to="/edit">
                      <button>edit</button>
                    </Link>
                    <button value={index} onClick={this.handleDelete}>
                      delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
