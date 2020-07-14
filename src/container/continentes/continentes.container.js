import React from 'react'
import './continentes.container.style.css'

export default class Continentes extends React.Component {
    render() {
        return (
            <div>
                <p className='nomesecao'>
                    Continentes
                </p>
                <p className='subtitulo'>
                    Selecione o continente que você deseja explorar!
                </p>
                <a href="page-2" target="_blank">
                    <button class="botaocont1">
                        África
                        </button>
                </a>
                <a href="#" target="_blank">
                    <button class="botaocont2">
                        América
                        </button>
                </a>
                <a href="#" target="_blank">
                    <button class="botaocont3">
                        Antártida
                        </button>
                </a>
                <a href="" target="_blank">
                    <button class="botaocont4">
                        Ásia
                    </button>
                </a>
                <a href="#" target="_blank">
                    <button class="botaocont5">
                        Europa
                    </button>
                </a>
                <a href="#" target="_blank">
                    <button class="botaocont6">
                        Oceania
                    </button>
                </a>
            </div>
        )

    }
}