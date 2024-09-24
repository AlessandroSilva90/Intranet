import { useEffect, useState } from 'react'
import './App.css'
import Menu from './Components/Navbar/Menu'

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CarouselComponent from './Components/Carousel/Carousel';

// imagens
import wspImg from "./assets/WSP.png";
import atendi from "./assets/atendiMV.png";
import indicadores from "./assets/indicadores.png";
import laudos from "./assets/laudos.png";
import pep from "./assets/pep.png";
import producao from "./assets/producao.png";
import sacr from "./assets/sacr.png";
import sagres from "./assets/sagres.png";
import totem from "./assets/totem-senha.png";
import trr from "./assets/trr.png";
import engenharia from "./assets/engenharia.png";

import IndicadorTI from './Pages/Indicadores/ti';

// modal
import Warning from './Components/AvisoPopUp/Modal';

// api
import { snAviso } from './api';
import SistemBar from './Components/SistemBar/sistemBar';
import Roteador from './router';

function App() {

  return (
    <>
      <Menu/>
      <Roteador/>
    </>
    
  )
}

export default App
