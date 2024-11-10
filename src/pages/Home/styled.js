import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*Primeira parte do componente da tela principal*/
export const Container01 = styled.div`
  width: 100%;
  height: 100%;
`;
export const Title01 = styled.h1`
  position: absolute;
  height: 192px;
  left: 0px;
  right: 0px;
  top: 40px;
  text-align: center;
  font-size: 38px;
  font-family: 'Times New Roman', Times, serif;
  color: #ffffff;
`;
export const Paragrafo01 = styled.p`
  position: absolute;
  left: 387px;
  right: 420px;
  top: 107px;
  bottom: 0px;
  text-align: justify;
  font-size: 24px;
`;
export const Img01 = styled.img`
  position: absolute;
  left: 1154px;
  top: 170px;
  width: 500px;
  height: 300px;
  object-fit: cover;
`;
export const Button = styled.button`
  /* Link */

  position: absolute;
  width: 181px;
  height: 48px;
  left: 409px;
  top: 329px;
  background: linear-gradient(90deg, #80cc28 40%, #ffffff 87%);
  border-radius: 12px;
  text-align: center;
`;
export const NavLink = styled(Link)`
  position: absolute;
  margin: 0;
  font-size: 24px;
  left: 736px;
  top: 337px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;
/*Segunda parte da tela principal */

export const Container02 = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title02 = styled.h1`
  position: absolute;
  width: 719.41px;
  height: 994px;
  left: 499px;
  top: 123px;
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 300;
  font-size: 80px;
  line-height: 80px;
  display: flex;
  align-items: center;
  letter-spacing: -1.6px;
  color: #fff;
  text-align: center;
`;
export const Img02 = styled.img`
  position: absolute;
  left: 522px;
  top: 685px;
  width: 500px;
  height: 400px;
  object-fit: cover;
`;

export const SubTitle = styled.h5`
  /* Heading 3 → Learn */

  position: absolute;
  width: 122px;
  height: 29px;
  left: 1077px;
  top: 752px;
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.48px;
  color: greenyellow;
`;
export const Paragrafo02 = styled.p`
  /* Estude os conceitos básicos e coloque em prática habilidades essenciais em cursos e laboratórios de segurança cibernética conduzidos por especialistas do setor. */

  position: absolute;
  width: 402px;
  height: 122px;
  left: 1172px;
  top: 732px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: justify;
`;

export const SubTitle02 = styled.h5`
  /* Heading 3 → Learn */

  position: absolute;
  width: 122px;
  height: 29px;
  left: 1077px;
  top: 871px;
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.48px;
  color: greenyellow;
`;

export const Paragrafo03 = styled.p`
  position: absolute;
  width: 402px;
  height: 122px;
  left: 1172px;
  top: 863px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: justify;
`;
