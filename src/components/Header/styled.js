import styled from 'styled-components';
import { primaryColor, linkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: black;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${linkColor};
    margin: -20px 281px -17px -106px;
  }
  p {
    color: ${linkColor};
    font-size: 20px;
    margin-left: -133px;
  }
`;
export const Img = styled.img`
  width: 76px;
`;
