import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/Title/Title';
function App() {
  return (
    <>
    <div>
     <Title nome="Isis" sobrenome="Souza" texto ="Bem Vindo, sou Título"/>
     <Title texto ="Eu sou outro Título"/>
     <Paragrafo paragrafo ="Este é o parágrafo do site"/>
    </div>
    </>
  );
}

export default App

//criar um componente title
