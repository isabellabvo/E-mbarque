import React from 'react'
import './ferramenta.scss'
import random from "../../images/ferramentarandom.png"

export default class Ferramenta extends React.Component {
    render() {
        return (
            <div className="imagem">
                <p className="secaotop">Selecione alguma das regiões abaixo</p>
                <label class="container">Continente
                    <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                </label>

                    <label class="container">País
                        <input type="checkbox" />
                            <span class="checkmark"></span>
                    </label>

                        <label class="container">Cidade
                            <input type="checkbox" />
                                <span class="checkmark"></span>
                        </label>    
                        <img src={random} />

            </div>
        )
        
    }
}