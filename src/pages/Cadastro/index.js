import React from 'react';
import { useDispatch } from 'react-redux';
import { Section } from '../../styles/GlobalStyled';
import {
  Form,
  LabelL,
  Title,
  Input,
  Button,
  InputEmail,
  InputSenha,
  InputNome,
  InputCpf,
  InputCSenha,
  Check,
  FormLink,
  CadastroLink,
  Cadastro,
} from './stlyed';

import * as action from '../../store/modules/example/action';
export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(action.cliacaBotaoRequest());
  }
  return (
    <Section>
      <Title>Cadastro</Title>
      <Form onSubmit={handleClick}>
        <InputNome type="text" name="nome" placeholder="NOME*" />
        <InputCpf type="text" name="cpf" placeholder="CPF*" />
        <InputEmail type="email" name="email" placeholder="EMAIL*" />
        <InputSenha type="password" name="senha" placeholder="SENHA*" />
        <InputCSenha
          type="password"
          name="csenha"
          placeholder="CONFIMAR SENHA*"
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Section>
  );
}
