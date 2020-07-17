import React from 'react'
import './texto.scss'
import random from "../../images/random.png"

export default class Texto extends React.Component {
    render() {
        return (
            <div className="fundinho">
                <div className="diamond">
                <p className="palestrinha1">Não tem nenhum lugar em mente?</p>

                </div>
                <div className="diamond2">
                <p className="palestrinha2">Tente usar a nossa ferramenta Random</p>

                </div>

            </div>
        )
    }
}