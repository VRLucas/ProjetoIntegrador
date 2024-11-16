import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Title = styled.h1`
  position: absolute;
  font-size: 30px;
  text-align: center;
  color: #fff;
  top: 42px;
  left: 785px;
`;
export const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 332px;
  margin: 210px auto;
  padding: 20px;
  background-color: #ffff;
  border-radius: 8px;
  height: 393px;
  left: 658px;
  top: -85px;
`;
export const FormLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  color: purple;
  top: 144px;
  left: 185px;
`;
export const Cadastro = styled.p`
  position: absolute;
  font-size: 16px;
  text-align: center;
  color: #000000;
  top: 385px;
  left: 703px;
`;

export const CadastroLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  color: purple;
  top: 385px;
  left: 880px;
`;

export const LabelL = styled.label`
  position: absolute;
  font-size: 16px;
  top: 143px;
  left: 77px;
`;

export const InputEmail = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 145px;
`;
export const InputNome = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 43px;
`;
export const InputCpf = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 94px;
`;
export const InputCSenha = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 246px;
`;
export const InputSenha = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 196px;
`;
export const Check = styled.input`
  position: absolute;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 146px;
  left: -72px;
`;
export const Button = styled.button`
  position: absolute;
  background-color: #ff8c00;
  color: white;
  padding: 10px 20px;
  border: none;
  top: 316px;
  border-radius: 50px;
  width: 205px;
`;
