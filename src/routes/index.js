import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Couser from '../pages/Couser';
export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<MyRoute />}>
        <Route exact path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Couser" element={<Couser />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
