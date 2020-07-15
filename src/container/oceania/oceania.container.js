import React from 'react'
import './oceania.container.style.scss'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="oceaniatopbar">
                <p className="nomecontinente">Oceania</p>
                <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                <a href="/" className="volta"> Voltar para a página inicial </a>
            </div>
        )
    }
}