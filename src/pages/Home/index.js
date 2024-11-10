import React from 'react';
import { useDispatch } from 'react-redux';
import { Section } from '../../styles/GlobalStyled';

import {
  Title01,
  Paragrafo01,
  Img01,
  Button,
  NavLink,
  Container01,
  Container02,
  Title02,
  Paragrafo02,
  Img02,
  SubTitle,
  SubTitle02,
  Paragrafo03,
} from './styled';
import { toast } from 'react-toastify';
import laptop from './../../Images/laptop.png';
import escudo from './../../Images/escudo.png';
import axios from '../../service/axios';

export default function Login() {
  return (
    <Section>
      <Container01>
        <Title01>
          Cursos Introdutorios de Cybersegunraça Projeto Integrador
        </Title01>
        <Img01 src={laptop} alt="laptop" />
        <Paragrafo01>
          Cibersegurança é como montar um quebra-cabeça para criar um mundo
          digital mais seguro. Não é necessário ser um expert para começar; com
          curiosidade e esforço, qualquer pessoa pode aprender e contribuir. Ao
          estudar cibersegurança, você estará ajudando a proteger informações e
          criar soluções inovadoras. Cada nova habilidade é uma ferramenta
          valiosa e a sensação de fazer a diferença é extremamente gratificante.
          Comece hoje e faça parte dessa missão de proteger o futuro digital!
        </Paragrafo01>
        <Button>SmartTech</Button>
        <NavLink to="/couser">Comece a estudar de graça</NavLink>
      </Container01>
      <Container02>
        <Title02>Aprenda Pratique</Title02>
        <Img02 src={escudo} alt="escudo" />
        <SubTitle>Aprenda:</SubTitle>
        <Paragrafo02>
          Estude os conceitos básicos e coloque em prática habilidades
          essenciais em cursos e laboratórios de segurança cibernética
          conduzidos por especialistas do setor.
        </Paragrafo02>
        <SubTitle02>Pratique:</SubTitle02>
        <Paragrafo03>
          Pratique os conceitos básicos e desenvolva habilidades essenciais
          participando de cursos e de segurança cibernética. Este projeto tem
          como objetivo aplicar o conhecimento teórico.
        </Paragrafo03>
      </Container02>
    </Section>
  );
}
