import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
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
export const Paragrafo = styled.p`
  position: absolute;
  left: 387px;
  right: 420px;
  top: 107px;
  bottom: 0px;
  text-align: justify;
  font-size: 24px;
`;
export const Img = styled.img`
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
