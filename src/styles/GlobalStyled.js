import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  color: ${colors.primaryDarkColor} ;
}
html, body, #root {
  height: 100%;
  width: 100%;
}
button {
  cursor: pointer;
  background-color: ${colors.buttonColor};
  border: none;
  color: #fff;
  padding: 10px 20px ;
  border-radius: 8px;

}
a{
  text-decoration: none;
  color: ${colors.primaryColor};
}
ul {
  list-style: none;
}
body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background-color: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background-color: ${colors.errorColor};
}


`;

/* Tela Principal */

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  background-color: orange;
`;
