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
  left: 70px;
  right: 0px;
  top: 40px;
  text-align: left;
  font-size: 38px;
  font-family: 'Times New Roman', Times, serif;
  color: #ffffff;
`;
export const Paragrafo01 = styled.p`
  position: absolute;
  left: 100px;
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
  box-sizing: border-box;

  position: absolute;
  width: 555px;
  height: 508px;
  left: 966px;
  top: calc(50% - 508px / 2 + 23.17px);

  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
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
  left: 67px;
  top: 159px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: justify;
`;
export const Title03 = styled.h5`
  position: absolute;
  height: 192px;
  left: 8px;
  right: 0px;
  top: 763px;
  text-align: left;
  font-size: 38px;
  font-family: 'Times New Roman', Times, serif;
  color: #ffffff;
`;
export const Title04 = styled.h5`
  position: absolute;
  height: 192px;
  left: 8px;
  right: 0px;
  top: 1356px;
  text-align: left;
  font-size: 38px;
  font-family: 'Times New Roman', Times, serif;
  color: #ffffff;
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
export const Box1 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 102px;
  right: 892px;
  top: 839px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox1 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 3px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox1 = styled.p`
  position: absolute;
  left: 3px;
  top: 275px;
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
export const ImagesBox1 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox1 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box1 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box1 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;
export const Box2 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 506px;
  right: 892px;
  top: 839px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox2 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 3px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox2 = styled.p`
  position: absolute;
  left: 3px;
  top: 290px;
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
export const ImagesBox2 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox2 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box2 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box2 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;

export const Box3 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 913px;
  right: 892px;
  top: 839px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox3 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 3px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox3 = styled.p`
  position: absolute;
  left: 3px;
  top: 290px;
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
export const ImagesBox3 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox3 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box3 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box3 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;

export const Box4 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 1315px;
  right: 892px;
  top: 839px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox4 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 3px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox4 = styled.p`
  position: absolute;
  left: 3px;
  top: 290px;
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
export const ImagesBox4 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox4 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box4 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box4 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;

export const Box5 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 102px;
  right: 892px;
  top: 1463px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox5 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 3px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox5 = styled.p`
  position: absolute;
  left: 3px;
  top: 296px;
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
export const ImagesBox5 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox5 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box5 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box5 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;

export const Box6 = styled.div`
  /* Listitem */

  box-sizing: border-box;
  position: absolute;
  left: 503px;
  right: 892px;
  top: 1463px;
  bottom: -2.22px;
  background: #13171c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 442px;
  width: 329px;
`;

export const TitleBox6 = styled.h6`
  /* Heading 2 → Why Cybrary Cybersecurity Training? */

  position: absolute;
  left: 14px;
  top: 232px;
  font-family: 'Figtree';
  font-style: normal;
  font-size: 24.8px;
  display: flex;
  text-align: center;
  letter-spacing: -0.976px;
  color: #ffffff;
`;
export const ParagrafoBox6 = styled.p`
  position: absolute;
  left: 3px;
  top: 296px;
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
export const ImagesBox6 = styled.img`
  width: 328px;
  height: 176px;
`;
export const BouttoneBox6 = styled.button`
  /* Background */

  position: absolute;
  width: 135px;
  height: 32px;
  left: 6px;
  top: 179px;
  background: #e2067a;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone1_Box6 = styled.button`
  /* Background */

  position: absolute;
  width: 62px;
  height: 31px;
  left: 149px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Bouttone2_Box6 = styled.button`
  /* Background */
  position: absolute;
  width: 106px;
  height: 31px;
  left: 216px;
  top: 180px;
  background: #000000;
  border-radius: 32px;
`;
