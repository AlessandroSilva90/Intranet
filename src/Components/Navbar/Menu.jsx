import logoIntranet from "../../assets/326.png"
import "./menu.css"
import axios from "axios";

import wspImg from "../../assets/megafone_white.png";
import IpApp from "../ip/ip";
import { useState, useEffect } from "react";

export default function Menu(){
    const [indicador, setIndicador] = useState(['']);
    const [indicadorMes, setIndicadorMes] = useState(['']);
    const [indicadorSemana, setIndicadorSemana] = useState(['']);

    useEffect(() => {
        async function load(){
            const res = await axios.get("http://rota/santacasa/indicadores");
            setIndicador(res.data);

            const res2 = await axios.get("http://rota/santacasa/indicadoresMes");
            setIndicadorMes(res2.data);

            const res3 = await axios.get("http://rota/santacasa/indicadoresSemana");
            setIndicadorSemana(res3.data);

        }load()
    }, []);
    
    const getIndicador = () => {
        return (
            <> <b>Serviços atendidos pela <b>T.I</b> no dia(hoje): {
                indicador.map((i, index)=> (
                       <label><b>{i['QTD']}</b></label> 
                    ))
            } ; Na semana: {
                indicadorSemana.map((i, index)=> (
                       <label><b>{i['QTD']}</b></label> 
                    ))
            } ;
               No mês: {
                indicadorMes.map((i, index)=> (
                       <label><b>{i['QTD']}</b></label> 
                    ))
            };
            </b>
            </>
        )
      };
    return(
        <>
        <div className="navContent">
            <div className="firstContent">
                <img src={logoIntranet} alt="" srcset="" />
                <IpApp/>
            </div>
            <marquee scrollamount="5" style={{color:'white',background:"#820909",width:'100%', marginBottom:'-2px' }}>{getIndicador()}</marquee>
            <div className="secondContent">
                <div className="navs">
                    <label><a href="http://rota/">Início</a></label>
                    <label><a href="http://rota/banco"> Banco de Talentos </a></label>
                    <label><a href="http://rota/pops-2/">POP's </a></label>
                    <label><a href="http://rota/protocolos-clinicos/">Protocolos Clínicos</a></label>
                    <label><a href="http://rota/beneficios/">Benefícios</a></label>
                    <label><img src={wspImg} width={'30px'}/> <a href="http://rota/ouvidoria_santa_casa/">Ouvidoria</a></label>
                    <label><a href="https://mail.google.com/mail/u/0/" target="_blank">Email</a></label>
                </div>
            </div>
            
        </div>
        </>
    );

}