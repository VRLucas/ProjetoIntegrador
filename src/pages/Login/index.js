import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Section } from '../../styles/GlobalStyled';
import {
  Form,
  LabelL,
  Title,
  Input,
  Button,
  InputEmail,
  InputSenha,
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
      <Title>Login</Title>
      <Form onSubmit={handleClick}>
        <InputEmail type="email" name="nome" placeholder="Email*" />
        <InputSenha type="password" name="senha" placeholder="Senha*" />
        <LabelL>Lembrar-me</LabelL>
        <FormLink to="/">Esqueceu a senha?</FormLink>
        <Check type="checkbox" name="check" />
        <Button type="submit">Entrar</Button>
      </Form>
      <Cadastro>Ainda não tem uma conta?</Cadastro>
      <CadastroLink to="/cadastro">Cadastre-se</CadastroLink>
    </Section>
  );
}
