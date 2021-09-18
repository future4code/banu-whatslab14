import React, { Component } from 'react';
import styled from 'styled-components';

const Mensagem = styled.div`
  background: ${(props) => {
    if (props.tipo === 'eu') {
      return '#dcf8c7';
    } else {
      return '#E9E9E9';
    }
  }};
  align-self: ${(props) => {
    if (props.tipo === 'eu') {
      return 'flex-end';
    } else {
      return 'flex-start';
    }
  }};
  font-size: 15px;
  min-width: 10%;
  max-width: 60%;
  height: auto;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  word-break: break-word;
  box-shadow: 0px 2px 4px #d5d5d5;

  @media (max-width: 475px) {
    max-width: 90%;
  }
`;

const NomeUsuario = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1em;
  font-weight: 500;
  color: #01bfa5;
`;

class MensagemItem extends Component {
  render() {
    const nome = this.props.nome.toLowerCase();

    if (nome === 'eu') {
      return (
        <Mensagem tipo={'eu'} onDoubleClick={this.props.deleteMensagem}>
          <p>{this.props.mensagem}</p>
        </Mensagem>
      );
    } else {
      return (
        <Mensagem tipo={'outro'} onDoubleClick={this.props.deleteMensagem}>
          <NomeUsuario>{this.props.nome}</NomeUsuario>
          <p>{this.props.mensagem}</p>
        </Mensagem>
      );
    }
  }
}

export default MensagemItem;
