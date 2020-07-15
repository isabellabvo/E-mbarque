import React from 'react'
import './america.container.scss'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="americatopbar">
                <p className="nomecontinente">Ámérica</p>
                <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                <a href="/" className="volta"> Voltar para a página inicial </a>
            </div>
        )
    }
}