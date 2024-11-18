import styled from 'styled-components';
import { primaryColor, linkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 1);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  a {
    color: ${linkColor};
    margin: -20px 281px -17px -106px;
    font-size: 20px;
  }
`;
export const Paragraph = styled.p`
  color: ${linkColor};
  font-size: 20px;
  margin-left: -133px;
`;
export const ParagraphLogin = styled.p`
  color: #ffff;
  font-size: 20px;
  margin-left: 78px;
  margin-top: -26px;
`;
export const ParagraphCouser = styled.p`
  color: #ffff;
  font-size: 20px;
  margin-left: 78px;
  margin-top: -26px;
`;
export const Img = styled.img`
  width: 76px;
`;
