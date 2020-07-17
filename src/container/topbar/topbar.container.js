import React from 'react'
import './topbar.container.style.scss'

import Logo from '../../images/circle-cropped.png'
export default class TopbarContainer extends React.Component {
    render() {
        return (
            <div className="topbar">
                <ul class="topbar2">
                    <p class="tabstopbar">
                        <a href="index" class="tabstopbar2" target="_blank"> Home </a>
                    </p>
                    <p class="tabstopbar">
                        <a href="random" target="_blank" class="tabstopbar2"> Random </a>
                    </p>
                    <div class="logo">
                        <img src={Logo} />                    
                    </div>
                    <p class="tabstopbar">
                        <a href="sobrenós"  target="_blank" class="tabstopbar2"> Sobre nós </a>
                    </p>
                    <p class="tabstopbar">
                        <a href="contatos"  target="_blank" class="tabstopbar2"> Contato </a>
                    </p>
                </ul>
                <p class="E-mbarque">
                    E-mbarque
                </p>
                <p className="novosubtitulo">
                    Viaje no conforto e segurança de casa
                </p>
            </div>
        )
    }
}