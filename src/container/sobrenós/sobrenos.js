import React from 'react'
import './sobrenos.scss'
import fotoperfil from "../../images/Foto.png"
import fotoperfildev1 from "../../images/perfil.png"
import final from "../../images/partefinalsobrenos.png"
export default class Eu extends React.Component {
    render() {
        return (
            <div>
                <p className="nomezinho">Isabella Oliveira</p>
                <p className="nomezinho1">Estagiária em Desenvolvimento Web na SF Labs</p>
                <p className="nomezinho2">Engenharia Mecatrônica no Insper</p>
                <div className="fotinho">
                    <img src={fotoperfil} />
                </div>
                <p className="nomezinhodev1">Gustavo Tamanaka</p>
                <p className="nomezinho1dev">Desenvolvimento Web na SF Labs</p>
                <div className="perfil1dev">
                    <img src={fotoperfildev1} />
                </div>
                <p className="nomezinhodev2">Douglas Kodama</p>
                <p className="nomezinho2dev">Desenvolvimento Web na SF Labs</p>
                <div className="perfil2dev">
                    <img src={fotoperfildev1} />
                </div>
                <div className="sobrenosfinal">
                    <img src={final} />
                </div>
            </div>
        )
    }
}