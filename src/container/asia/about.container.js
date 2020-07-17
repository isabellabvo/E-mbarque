import React from 'react'
import './about.container.scss'
import asia from "../../images/ásia.png"
import barrapesq from "../../images/barrapesquisa.jpg"
import fundoasia from "../../images/buscaespAS.jpg"
export default class Conteudo extends React.Component{
    render(){
        return(
            <body className="body">
                <div className="imagemcentral2">
                    <img src={asia} />                    
                </div>
                <div className="circuloas1">
                    50 países
                </div>
                <div className="circuloas2">
                    44.580.000 km²
                </div>
                <div className="circuloas3">
                    2300 línguas nativas
                </div>
                <div className="circuloas4">
                áreas mais procuradas <br></br>
                Singapura | Bangkok  Dubai 
                </div>
                <p className="secao">Busca Específica</p>

                <div className="fundoasia">
                    <p className="convite">Qual local da Ásia você deseja conhecer?</p>

                    <img src={fundoasia} />
                </div>
                <p className="secao">Países</p>

            </body>
        )
    }
}