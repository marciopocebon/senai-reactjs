import React, { Component } from "react";
import api from "./services/api";

export default class Form extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      password: ""
    },
    error: false
  };

  handleFormSubmit = async e => {
    try {
      e.preventDefault();

      const response = await api.post("users", this.state.formData);

      this.props.addUser(response.data);

      this.setState({
        error: false,
        formData: { name: "", email: "", password: "" }
      });
    } catch (err) {
      this.setState({ error: true });
    }
  };

  handleInputChange = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { name, email, password } = this.state.formData;

    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.error && <p>Erro no formulário</p>}
        <input
          onChange={this.handleInputChange}
          value={name}
          name="name"
          placeholder="Nome"
        />
        <input
          onChange={this.handleInputChange}
          value={email}
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <input
          onChange={this.handleInputChange}
          value={password}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
