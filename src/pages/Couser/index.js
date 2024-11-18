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
  Title04,
  Paragrafo04,
  Box1,
  TitleBox1,
  ParagrafoBox1,
  ImagesBox1,
  BouttoneBox1,
  Bouttone1_Box1,
  Bouttone2_Box1,
  Box2,
  TitleBox2,
  ParagrafoBox2,
  ImagesBox2,
  BouttoneBox2,
  Bouttone1_Box2,
  Bouttone2_Box2,
  Box3,
  TitleBox3,
  ParagrafoBox3,
  ImagesBox3,
  BouttoneBox3,
  Bouttone1_Box3,
  Bouttone2_Box3,
  Box4,
  TitleBox4,
  ParagrafoBox4,
  ImagesBox4,
  BouttoneBox4,
  Bouttone1_Box4,
  Bouttone2_Box4,
  Box5,
  TitleBox5,
  ParagrafoBox5,
  ImagesBox5,
  BouttoneBox5,
  Bouttone1_Box5,
  Bouttone2_Box5,
  Box6,
  TitleBox6,
  ParagrafoBox6,
  ImagesBox6,
  Bouttone1_Box6,
  Bouttone2_Box6,
  BouttoneBox6,
} from './styled';
import couser1 from './../../Images/couser1.png';
import couser2 from './../../Images/couser2.png';
import couser3 from './../../Images/couser3.png';
import couser4 from './../../Images/couser4.png';
import couser5 from './../../Images/couser5.png';
import couser6 from './../../Images/couser6.png';
import { toast } from 'react-toastify';

import axios from '../../service/axios';

export default function Login() {
  return (
    <Section>
      <Container01>
        <Title01>Cursos</Title01>
        <Paragrafo01>
          Estamos orgulhosos de nossos clientes felizes. Ouça o que nossos
          clientes da equipe têm a dizer sobre suas experiências com nossos
          cursos de segurança cibernética online e treinamento em segurança
          cibernética.
        </Paragrafo01>
        <Title03>
          Cursos e treinamentos populares de segurança cibernética
        </Title03>
        <Title04>Novos Cursos</Title04>
      </Container01>
      <Container02>
        <Paragrafo02>
          Tenho tido preocupações sobre como começar em termos de construção da
          minha #cibercarreira com um caminho sustentado. Então, fui apresentado
          à Cybrary e pude me inscrever e começar no começo da semana passada e
          passei por duas sessões, conhecendo a Cybrary e também uma visão do
          que é segurança cibernética da perspectiva deles. Isso me deu uma
          visão geral de quais empregos são encontrados no espaço, suas
          responsabilidades gerais, habilidades necessárias, certificações
          necessárias e seu salário médio... A Cybrary me deu um motivo maior
          para perseguir o desejo do meu coração a todo custo.
        </Paragrafo02>
      </Container02>
      <Box1>
        <TitleBox1>Introdução à Cibersegurança</TitleBox1>
        <ParagrafoBox1>
          Um curso voltado para iniciantes, oferecendo uma visão geral do que é
          cibersegurança, as principais ameaças digitais e boas práticas para
          proteger dados.
        </ParagrafoBox1>
        <ImagesBox1 src={couser1} alt="Cursos" />
        <BouttoneBox1>inscreva-se</BouttoneBox1>
        <Bouttone1_Box1>15H</Bouttone1_Box1>
        <Bouttone2_Box1>5 Módulos</Bouttone2_Box1>
      </Box1>
      <Box2>
        <TitleBox2>Fundamentos de Segurança Cibernética</TitleBox2>
        <ParagrafoBox2>
          Este curso aborda os conceitos essenciais de cibersegurança, como
          criptografia, autenticação e controles de acesso. É uma boa introdução
          para quem quer construir uma base sólida de conhecimento..
        </ParagrafoBox2>
        <ImagesBox2 src={couser2} alt="Cursos" />
        <BouttoneBox2>inscreva-se</BouttoneBox2>
        <Bouttone1_Box2>15H</Bouttone1_Box2>
        <Bouttone2_Box2>5 Módulos</Bouttone2_Box2>
      </Box2>
      <Box3>
        <TitleBox3>Segurança Cibernética Essencial</TitleBox3>
        <ParagrafoBox3>
          Focado em ameaças modernas, como malware e phishing, este curso ensina
          os participantes a identificar e mitigar riscos comuns à segurança da
          informação.
        </ParagrafoBox3>
        <ImagesBox3 src={couser3} alt="Cursos" />
        <BouttoneBox3>inscreva-se</BouttoneBox3>
        <Bouttone1_Box3>15H</Bouttone1_Box3>
        <Bouttone2_Box3>5 Módulos</Bouttone2_Box3>
      </Box3>
      <Box4>
        <TitleBox4>Segurança de Rede para Iniciantes</TitleBox4>
        <ParagrafoBox4>
          Este curso abrange os fundamentos da segurança de redes, incluindo
          protocolos de segurança, firewall, VPNs e como proteger uma rede
          contra ataques.
        </ParagrafoBox4>
        <ImagesBox4 src={couser4} alt="Cursos" />
        <BouttoneBox4>inscreva-se</BouttoneBox4>
        <Bouttone1_Box4>15H</Bouttone1_Box4>
        <Bouttone2_Box4>5 Módulos</Bouttone2_Box4>
      </Box4>
      <Box5>
        <TitleBox5>Técnicas de Invasão com Kali Linux</TitleBox5>
        <ParagrafoBox5>
          Utilize Kali Linux na prática com Nmap, OWASP, Hydra, Metasploit,
          Dirb, Wireshark + 3 laboratórios completos
        </ParagrafoBox5>
        <ImagesBox5 src={couser5} alt="Cursos" />
        <BouttoneBox5>inscreva-se</BouttoneBox5>
        <Bouttone1_Box5>15H</Bouttone1_Box5>
        <Bouttone2_Box5>5 Módulos</Bouttone2_Box5>
      </Box5>
      <Box6>
        <TitleBox6>Introdução ao Ethical Hacking</TitleBox6>
        <ParagrafoBox6>
          Uma introdução ao hacking ético, ensinando como os hackers testam a
          segurança de sistemas e como prevenir ataques. Foca em
          vulnerabilidades comuns e como corrigi-las.
        </ParagrafoBox6>
        <ImagesBox6 src={couser6} alt="Cursos" />
        <BouttoneBox6>inscreva-se</BouttoneBox6>
        <Bouttone1_Box6>15H</Bouttone1_Box6>
        <Bouttone2_Box6>5 Módulos</Bouttone2_Box6>
      </Box6>
    </Section>
  );
}
