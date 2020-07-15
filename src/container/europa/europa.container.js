import React from 'react'
import './europa.container.style.scss'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="europatopbar">
                <p className="nomecontinente">Europa</p>
                <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                <a href="/" className="volta"> Voltar para a página inicial </a>
            </div>
        )
    }
}