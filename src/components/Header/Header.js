import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './../../Images/logo.png';
import { Nav, Img } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <Img src={logo} alt="Logo" />
      </Link>
      <Link to="/">
        <p>SmartTech</p>
      </Link>
      <Link to="/login">
        <FaSignInAlt />
      </Link>
      <Link to="/user">
        <FaUserAlt />
      </Link>
    </Nav>
  );
}
