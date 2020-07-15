import React from 'react'
import './antartida.container.style.scss'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="antartidatopbar">
                <p className="nomecontinente">Antártida</p>
                <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                <a href="/" className="volta"> Voltar para a página inicial </a>
            </div>
        )
    }
}