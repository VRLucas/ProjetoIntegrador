import React from 'react';
import { FaHome, FaSignInAlt, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './../../Images/logo.png';
import { Nav, Img, Paragraph, ParagraphLogin, ParagraphCouser } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <Img src={logo} alt="Logo" />
      </Link>
      <Link to="/">
        <Paragraph>SmartTech</Paragraph>
      </Link>
      <Link to="/login">
        <FaSignInAlt />
        <ParagraphLogin>Login</ParagraphLogin>
      </Link>
      <Link to="/couser">
        <FaBook />
        <ParagraphCouser>Cursos</ParagraphCouser>
      </Link>
    </Nav>
  );
}
