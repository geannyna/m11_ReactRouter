import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Registra el error o realiza alguna acción personalizada aquí
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar un mensaje de error personalizado aquí
      return <div>Ha ocurrido un error.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
