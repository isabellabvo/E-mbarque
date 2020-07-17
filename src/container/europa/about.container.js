import React from 'react'
import './about.container.style.scss'
import europa from "../../images/europa.png"
import barrapesq from "../../images/barrapesquisa.jpg"
import fundoeuropa from "../../images/buscaespEU.jpg"
export default class Conteudo extends React.Component {
    render() {
        return (
            <body className="body">
                <div className="imagemcentral3">
                    <img src={europa} />
                </div>
                <div className="circuloe1">
                    50 países
                </div>
                <div className="circuloe2">
                    10.180.000 km²
                </div>
                <div className="circuloe3">
                    287 línguas vivas
                </div>
                <div className="circuloe4">
                    áreas mais procuradas <br></br>
                Londres | Paris  Roma
                </div>
                <p className="secao">Busca Específica</p>

                <div className="fundoeuropa">
                    <p className="convite">Qual local da Europa você deseja conhecer?</p>

                    <img src={fundoeuropa} />
                </div>
                <p className="secao">Países</p>
            </body>
        )
    }
}