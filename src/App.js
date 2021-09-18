import React from 'react';
import styled from 'styled-components';
import MensagemItem from './components/MensagemItem/MensagemItem';

const HeaderContainer = styled.header`
  height: 15vh;
  background: #01bfa5;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 60px;

  font-size: 30px;

  @media (max-width: 768px) {
    height: 15vh;
    font-size: 20px;
    padding: 0 20px;
  }
`;

const MainContainer = styled.main`
  padding: 20px;
  height: 85vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbfcff;
`;

const Wrapper = styled.div`
  height: 100%;
  background: #fbfcff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #b9babc;
`;

const MensagensContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 30px 20px 10px;

  display: flex;

  flex-direction: column;
  overflow-y: auto;
`;

const FormContainer = styled.div`
  border-top: 1px solid #b9babc;
  padding: 10px;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
`;

const InputGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    &.box-usuario {
      max-width: 250px;
      margin-right: 20px;

    }

    input {
      width: 100%;
      display: block;
      font-size: 16px;
      height: 35px;
      padding: 5px 8px;
      background: #fff;
      border: 1px solid #B9BABC;
      transition: all .2s ease;

      &::placeholder {
        color: #999;
        font-size 14px
      }

      &:hover,
      &:focus {
        border-color: #01bfa5;
      }
    }

    span {
      margin-right: 5px;
    }
    
    

    button {
      font-size: 16px;
      width: 130px;
      height: 35px;
      padding: 8px;
      border: none;
      background: #01bfa5;
      border: 1px solid #01bfa5;
      color: #fff;
    
      cursor: pointer;
      transition: all .2s ease;


      &:hover {
        background-color: #00A38C;
        border-color: #00A38C;
      }

      &:active {
        background: #008572;
        border-color: #008572;
      }
    }

    @media(max-width: 768px) {
      &.box-usuario {
      max-width: 100%;
      margin-right: 0;

      }
    }

`;

class App extends React.Component {
  state = {
    mensagens: [],
    nome: '',
    mensagem: '',
  };

  enviarMensagem = (event) => {
    if (this.state.nome === '' && this.state.mensagem.length > 0) {
      this.setState({
        mensagens: [
          ...this.state.mensagens,
          {
            id: this.state.mensagens.length,
            nome: 'eu',
            mensagem: this.state.mensagem,
          },
        ],
        mensagem: '',
      });
      return;
    }

    if (this.state.mensagem === '') {
      return;
    }

    this.setState({
      mensagens: [
        ...this.state.mensagens,
        {
          id: this.state.mensagens.length,
          nome: this.state.nome,
          mensagem: this.state.mensagem,
        },
      ],

      nome: '',
      mensagem: '',
    });
  };

  deleteMensagem = (id) => {
    const novasMensagens = this.state.mensagens.filter((mensagem) => {
      return mensagem.id !== id;
    });

    this.setState({
      mensagens: novasMensagens,
    });
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <h1>WhatsLab</h1>
        </HeaderContainer>
        <MainContainer>
          <Wrapper>
            <MensagensContainer>
              {this.state.mensagens.map((mensagem, index) => (
                <MensagemItem
                  deleteMensagem={() => this.deleteMensagem(mensagem.id)}
                  key={index}
                  nome={mensagem.nome}
                  mensagem={mensagem.mensagem}
                />
              ))}
              {/* <SecaoMensagens mensagens={this.state.mensagens} /> */}
            </MensagensContainer>
            <FormContainer>
              <InputGroup className='box-usuario'>
                <span>Usuário:</span>
                <input
                  type='text'
                  placeholder='Digite seu nome'
                  value={this.state.nome}
                  onChange={(event) =>
                    this.setState({ nome: event.target.value })
                  }
                />
              </InputGroup>
              <InputGroup className='box-mensagem'>
                <input
                  type='text'
                  placeholder='Digite uma mensagem'
                  required
                  value={this.state.mensagem}
                  onChange={(event) =>
                    this.setState({ mensagem: event.target.value })
                  }
                />
                <button onClick={this.enviarMensagem}>Enviar</button>
              </InputGroup>
            </FormContainer>
          </Wrapper>
        </MainContainer>
      </>
    );
  }
}

export default App;
