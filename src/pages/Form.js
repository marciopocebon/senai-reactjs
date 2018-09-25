import React, { Component, Fragment } from 'react';
import api from '../services/api';

export default class Form extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
    },
    error: false,
    loading: false,
  };

  handleFormSubmit = async e => {
    try {
      e.preventDefault();

      this.setState({ loading: true });

      await api.post('users', this.state.formData);

      this.props.history.push('/');
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  handleInputChange = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { name, email, password } = this.state.formData;

    return (
      <Fragment>
        <a onClick={this.handleBack}>Voltar</a>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.error && <p>Erro no formulário</p>}
          {this.state.loading && <p>Carregando...</p>}
          <input onChange={this.handleInputChange} value={name} name="name" placeholder="Nome" />
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
      </Fragment>
    );
  }
}
