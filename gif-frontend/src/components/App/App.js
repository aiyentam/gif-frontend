import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import axios from "axios";
import "./App.css";
import CreateGif from "../Gifs/CreateGif";
import EditGif from "../Gifs/EditGif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        {
          name: "",
          imgUrl: ""
        }
      ],
      succeeded: false
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

    axios.post("http://localhost:3001/gifs", { uploadedImg }).then(res => {
      console.log(res);
      console.log(res.data);
      var newArray = this.state.gifs.slice();
      newArray.push({ name: res.data.name, imgUrl: res.data.url });
      this.setState(newArray);
      this.setState({ succeeded: true });
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/gifs")
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
      <Router>
        <div className="body">
          <div className="nav-wrapper">
            <a href="https://giphy.com/" className="logo">
              GAphy
            </a>
            <Link to="/create">
              <button>add</button>
            </Link>
            <Link to="/edit">
              <button>edit</button>
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
            <div>image here</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
