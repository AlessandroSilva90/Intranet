import { useEffect, useState } from 'react'
import '../../App.css'
import Menu from '../../Components/Navbar/Menu';

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../../Components/Carousel/Carousel';

// imagens
import wspImg from "../../assets/WSP.png";
import atendi from "../../assets/atendiMV.png";
import laudos from "../../assets/laudos.png";
import sacr from "../../assets/sacr.png";
import sagres from "../../assets/sagres.png";
import totem from "../../assets/totem-senha.png";
import trr from "../../assets/trr.png";
import engenharia from "../../assets/engenharia.png";
import videoaulas from "../../assets/videoaula.png";
import peh from "../../assets/peh.png";

import IndicadorTI from '../Indicadores/ti';

// modal
import Warning from '../../Components/AvisoPopUp/Modal';

// api
import { snAviso } from '../../api';
import SistemBar from '../../Components/SistemBar/sistemBar';
import Roteador from '../../router';

const MainPage = () => {


  const [ativo, setAtivo] = useState('');
  const [anexo, setAnexo] = useState('');

  useEffect(()=>{
    
    async function iniciaDados(){
      const result = await snAviso();
      if(result.data[0].ativo == 'S'){
        setAtivo('true')
        setAnexo(result.data[0].anexo)
        
      }else{
        setAtivo('false')
      }
  }iniciaDados()
  },[ativo])






    return ( 
        
    <div className="content">
    
    <Container>
      
      <Row className='secondlayerContent'>
        <Col>
          <CarouselComponent/>
        </Col>
        <Col >
          <SistemBar/>
        </Col>
      </Row>
      <Warning op={ativo} anexo={anexo} />
    </Container>

    <div className="othersistems">
        
      <label className='titleBar'>Outros sistemas</label>
    <div className="sistemsView">
      {/* <div className="menulink"> */}
      <a href="http://rota/intranet2/videoaulas-2/" className='menulink'>
          <img src={videoaulas}/>
          <label>Treinamentos</label>
        </a>
      <a href="http://rota/intranet2/programa-de-eficiencia-hospitalar/" className='menulink'>
        <img src={peh}/>
        <label>Eficiência Hospitalar</label>
      </a>

        <a href="linkpainel" className='menulink'>
          <img src={atendi}/>
          <label>MV Painel de Indicadores</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="linktotem" className='menulink'>
          <img src={totem}/>
          <label>MV Totem Senha</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="linksacr" className='menulink'>
          <img src={sacr}/>
          <label>MV SACR</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="http://rota/wspV5/" className='menulink'>
          <img src={wspImg}/>
          <label>WspV5</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="linkpainel" className='menulink'>
          <img src={atendi}/>
          <label>Painel de Atendimentos Soul MV</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="http://rota/sistema-de-laudos/" className='menulink'>
          <img src={laudos}/>
          <label>Laudos</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="trr" className='menulink'>
          <img src={trr}/>
          <label>TRR S.Joaquim</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="sagres" className='menulink'>
          <img src={sagres}/>
          <label>SAGRES</label>
        </a>
      {/* </div> */}

      {/* <div className="menulink"> */}
        <a href="http://rota/pjemprestimos/" className='menulink'>
          <img src={engenharia}/>
          <label>Emprestimos de Equipamentos</label>
        </a>
        
      {/* </div> */}

    </div>

    </div>

    </div>
  // </div>
     );
}
 
export default MainPage;