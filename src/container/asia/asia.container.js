import React from 'react'
import './asia.container.scss'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="asiatopbar">
                <p className="nomecontinente">Ásia</p>
                <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                <a href="/" className="volta"> Voltar para a página inicial </a>
            </div>
        )
    }
}