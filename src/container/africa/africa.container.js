import React from 'react'
import './africa.container.style.scss'

export default class Topbar extends React.Component {
    render() {
        return (
            <body className="body">
                <div className="africatopbar">
                    <p className="nomecontinente">África</p>
                    <p className="fraseefeito">Deslumbre as maravilhas desse continente!</p>
                    <a href="/" className="volta"> Voltar para a página inicial </a>
                </div>
            </body>
        )
    }
}