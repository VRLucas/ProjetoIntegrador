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
  Container03,
  Title03,
  Paragrafo04,
  Rocket,
  ImgFoguete,
  TitleFoguete,
  ParagrafoFoguete,
  Laptop,
  ImgLaptop,
  TitleLaptop,
  ParagrafoLaptop,
  Shield,
  ImgShield,
  TitleShield,
  ParagrafoShield,
  Chess,
  ImgChess,
  TitleChess,
  ParagrafoChess,
  Star,
  ImgStar,
  TitleStar,
  ParagrafoStar,
  Vector,
  ImgVector,
  TitleVector,
  ParagrafoVector,
} from './styled';
import { toast } from 'react-toastify';
import laptop from './../../Images/laptop.png';
import escudo from './../../Images/escudo.png';
import foguete from './../../Images/foguete.png';
import pc from './../../Images/pc.png';
import chess from './../../Images/chess.png';
import shield from './../../Images/shield.png';
import star from './../../Images/star.png';
import vector from './../../Images/vector.png';

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
      <Container03>
        <Title03>Por que treinar Cybersegurança?</Title03>
        <Rocket>
          <ImgFoguete src={foguete} alt="fogute" />
          <TitleFoguete>Alavanque seu conhecimento</TitleFoguete>
          <ParagrafoFoguete>
            Comece seu treinamento e jornada em segurança cibernética com Planos
            de carreira guiados que ensinam conceitos fundamentais relacionados
            ao real responsabilidades do trabalho.
          </ParagrafoFoguete>
        </Rocket>
        <Laptop>
          <ImgLaptop src={pc} alt="computador" />
          <TitleLaptop>Membros da equipe a bordo</TitleLaptop>
          <ParagrafoLaptop>
            Nossos cursos e programas de integração de segurança cibernética
            escaláveis e repetíveis garantem que cada novo funcionário tenha a
            mesma base de conhecimento e habilidades.
          </ParagrafoLaptop>
        </Laptop>
        <Shield>
          <ImgShield src={shield} alt="shield" />
          <TitleShield>Ganhe Certificados</TitleShield>
          <ParagrafoShield>
            Arrase no exame com os Certification Prep Paths desenvolvidos por
            instrutores líderes do setor. Ganhe dicas privilegiadas e crie
            confiança com nossos exames práticos.
          </ParagrafoShield>
        </Shield>
        <Chess>
          <ImgChess src={chess} alt="chess" />
          <TitleChess>Aperfeiçoamento e prática</TitleChess>
          <ParagrafoChess>
            Domine habilidades práticas e familiarize-se com as últimas
            vulnerabilidades e ameaças para que você possa se preparar para
            ataques no mundo real.
          </ParagrafoChess>
        </Chess>
        <Star>
          <ImgStar src={star} alt="star" />
          <TitleStar>Retenha os melhores talentos</TitleStar>
          <ParagrafoStar>
            Crie novas oportunidades para seu pessoal mais comprometido e
            observe suas taxas de retenção dispararem.
          </ParagrafoStar>
        </Star>
        <Vector>
          <ImgVector src={vector} alt="vector" />
          <TitleVector>Retenha os melhores talentos</TitleVector>
          <ParagrafoVector>
            Crie novas oportunidades para seu pessoal mais comprometido e
            observe suas taxas de retenção dispararem.
          </ParagrafoVector>
        </Vector>
      </Container03>
    </Section>
  );
}
