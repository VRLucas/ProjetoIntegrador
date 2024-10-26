import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyled';

import { Title, Paragrafo, Img } from './styled';
import { toast } from 'react-toastify';
import laptop from './../../Images/image.png';
import axios from '../../service/axios';

export default function Login() {
  return (
    <Container>
      <Title>Cursos Introdutorios de Cybersegunraça Projeto Integrador</Title>
      <Img src={laptop} alt="laptop" />
      <Paragrafo>
        Cibersegurança é como montar um quebra-cabeça para criar um mundo
        digital mais seguro. Não é necessário ser um expert para começar; com
        curiosidade e esforço, qualquer pessoa pode aprender e contribuir. Ao
        estudar cibersegurança, você estará ajudando a proteger informações e
        criar soluções inovadoras. Cada nova habilidade é uma ferramenta valiosa
        e a sensação de fazer a diferença é extremamente gratificante. Comece
        hoje e faça parte dessa missão de proteger o futuro digital!
      </Paragrafo>
    </Container>
  );
}
