import React, { Component } from "react";
import api from "./services/api";

import List from "./List";
import Form from "./Form";

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const response = await api.get("users");

    this.setState({ users: response.data });
  }

  addUser = user => {
    this.setState({
      users: [...this.state.users, user]
    });
  };

  render() {
    return (
      <div className="App">
        <List users={this.state.users}>Lista de usuário</List>
        <Form addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
