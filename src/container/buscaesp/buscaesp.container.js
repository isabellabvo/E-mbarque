import React from 'react'
import './buscaesp.container.style.css'
import mundao from '../../images/mundao.jpeg'
import barrapesquisa from '../../images/barrapesquisa.jpg'

export default class BuscaEspecifica extends React.Component {
    render() {
        return (
            <div>
                <p className='nomesecao'>
                    Busca específica
                </p>
                <p className='subtitulo1'>
                    Procure o local desejado!
                </p>
                <p className='titulo'>
                    Sabe exatamente
                </p>
                <p className='titulo2'>
                    onde quer ir?
                </p>
                <div className="mundao">
                    <img src={mundao} />
                </div>
                <div className="barra">
                    <img src={barrapesquisa} />
                </div>
            </div>
        )
    }
}