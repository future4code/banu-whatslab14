import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 15vh;
  background: #01bfa5;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 60px;

  font-size: 30px;
`;

const MainContainer = styled.main`
  padding: 20px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbfcff;
`;

const MensagensContainer = styled.div`
  width: 800px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #b9babc;
`;

const FormContainer = styled.div`
  border: 1px solid #b9babc;
  padding: 10px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputGroup = styled.div`
 
    display: flex;
    align-items: center;

    input {
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

    .inputUsuario {
      max-width: 150px;
    }

    .inputMensagem {
      width: 350px;
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

`;

class App extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <h1>WhatsLab</h1>
        </HeaderContainer>
        <MainContainer>
          <MensagensContainer>
            <p>Mensagem</p>
          </MensagensContainer>
          <FormContainer>
            <InputGroup>
              <span>Usuário:</span>
              <input
                type='text'
                placeholder='Digite seu nome'
                className='inputUsuario'
              />
            </InputGroup>
            <InputGroup>
              <input
                type='text'
                className='inputMensagem'
                placeholder='Digite uma mensagem'
              />
              <button>Enviar</button>
            </InputGroup>
          </FormContainer>
        </MainContainer>
      </>
    );
  }
}

export default App;
