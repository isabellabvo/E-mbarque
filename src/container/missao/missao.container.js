import React from 'react'
import "./missao.container.style.css"

export default class MissaoContainer extends React.Component{
    render() {
        return (
        <div>
            <p className="nomesecao">
                Nossa Missão
            </p>
            <p className="missao1">
                Democratizar o ensino
            </p>
            <p className="missao2">
                Entreter durante a quarentena
            </p>
            <p className="missao3">
                Quebrar preconceitos
            </p>
            <p className="missao4">
                Expandir os horizontes
            </p>
        </div>)
    }
}