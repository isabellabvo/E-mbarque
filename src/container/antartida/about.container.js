import React from 'react'
import './about.container.style.scss'
import antartida from "../../images/antartida.png"
import barrapesq from "../../images/barrapesquisa.jpg"
import fundoantartida from "../../images/buscaespAN.jpg"
export default class Conteudo extends React.Component{
    render(){
        return(
            <body className="body">
                <div className="imagemcentral1">
                    <img src={antartida} />                    
                </div>
                <div className="circuloan1">
                    lugar mais ventoso do mundo
                </div>
                <div className="circuloan2">
                    14 000 000 km²
                </div>
                <div className="circuloan3">
                    80 estações de pesquisa
                </div>
                <div className="circuloan4">
                    20000 turistas por ano
                </div>
                <p className="secao">Busca Específica</p>
                <div className="fundoantartida">
                    <p className="convite1">Qual local da Antártida você deseja conhecer?</p>
                    <img src={fundoantartida} />
                </div>

            </body>
        )
    }
}