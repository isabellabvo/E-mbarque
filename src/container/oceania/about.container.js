import React from 'react'
import './about.container.style.scss'
import oceania from "../../images/oceania.png"
import barrapesq from "../../images/barrapesquisa.jpg"
import fundooceania from "../../images/buscaespOC.jpg"
export default class Conteudo extends React.Component {
    render() {
        return (
            <body className="body">
                <div className="imagemcentral4">
                    <img src={oceania} />
                </div>
                <div className="circuloo1">
                    14 países
                </div>
                <div className="circuloo2">
                    8.526.000 km²
                </div>
                <div className="circuloo3">
                    5000 línguas nativas
                </div>
                <div className="circuloo4">
                    áreas mais procuradas <br></br>
                Sydney | Melbourne  Auckland
                </div>
                <p className="secao">Busca Específica</p>

                <div className="fundooceania">
                    <p className="convite2">Qual local da Oceania você deseja conhecer?</p>

                    <img src={fundooceania} />
                </div>
                <p className="secao">Países</p>

            </body>
        )
    }
}