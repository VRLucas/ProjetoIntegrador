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
  top: 226px;
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
export const Container03 = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title03 = styled.h4`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  width: 764.81px;
  height: 48.8px;
  left: 82px;
  top: 1158px;
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 300;
  font-size: 48.8px;
  line-height: 49px;
  display: flex;
  align-items: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const Rocket = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */

  position: absolute;
  left: 234px;
  right: 73.28%;
  top: 1247px;
  bottom: -43.02%;
`;
export const ImgFoguete = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleFoguete = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoFoguete = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;
export const Laptop = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */
  position: absolute;
  left: 785px;
  right: 73.28%;
  top: 1244px;
  bottom: -43.02%;
`;
export const ImgLaptop = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleLaptop = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoLaptop = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;

export const Shield = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */
  position: absolute;
  left: 1345px;
  top: 1240px;
`;
export const ImgShield = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleShield = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoShield = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;
export const Chess = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */
  position: absolute;
  left: 228px;
  top: 1478px;
`;
export const ImgChess = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleChess = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoChess = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;
export const Star = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */
  position: absolute;
  left: 786px;
  top: 1478px;
`;
export const ImgStar = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleStar = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoStar = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;

export const Vector = styled.div`
  /* 64369e04d29c9d9b21942d66_home-icon-background.webp */
  position: absolute;
  left: 1350px;
  top: 1478px;
`;
export const ImgVector = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(180deg, #80cc28 40%, #ffffff 87%);
`;
export const TitleVector = styled.h6`
  /* Heading 2 → Launch Your Career */

  position: absolute;
  width: 169px;
  height: 28px;
  left: -39px;
  top: 85px;

  font-family: 'Figtree';
  font-style: normal;
  font-weight: 500;
  font-size: 24.8px;
  line-height: 29px;
  /* or 115% */
  display: flex;
  align-items: center;
  letter-spacing: -0.496px;

  color: #ffffff;
`;

export const ParagrafoVector = styled.p`
  /* Comece seu treinamento e jornada em segurança cibernética com Planos de
  carreira guiados que ensinam conceitos fundamentais relacionados ao
  real responsabilidades do trabalho. */

  position: absolute;
  width: 434px;
  height: 85px;
  left: -141px;
  top: 128px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgba(0, 0, 0, 0.8);
`;
