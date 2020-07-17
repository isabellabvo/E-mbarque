import React from 'react'
import './about.container.style.scss'
import africa from "../../images/africa.png"
import barrapesq from "../../images/barrapesquisa.jpg"
import fundoafrica from "../../images/buscaespAF.jpeg"

export default class Conteudo extends React.Component {
    render() {
        return (
            <body className="body">
                <div className="imagemcentral">
                    <img src={africa} />
                </div>
                <div className="circuloaf1">
                    54 países
                </div>
                <div className="circuloaf2">
                    30,370,000 km2
                </div>
                <div className="circuloaf3">
                    1250 - 3000 línguas nativas
                </div>
                <div className="circuloaf4">
                    áreas mais procuradas <br></br>
                Cairo | Lagos  Kinshasa
                </div>
                <p className="secao">Busca Específica</p>

                <div className="fundoafrica">
                    <p className="convite">Qual local da África você deseja conhecer?</p>

                    <img src={fundoafrica} />
                </div>
                <p className="secao">Países</p>

            </body>
        )
    }
}