import React from 'react'
import PaisesBotãoComponent from "./paisesbot.container"
export default class Paises extends React.Component {
    generatePaises(paises) {
        let retorno = [];
        paises.forEach(paises => {
            retorno.push(
                <PaisesBotãoComponent pais={paises.paises}>
                </PaisesBotãoComponent>
            )
        });
        return retorno
    }
    render() {
        let paiseseuropa = [
            "Albânia", "Alemanha", "Andorra", "Áustria", "Bélgica", "Bielorrússia",
            "Bósnia e Herzegovina", "Bulgária", "Cazaquistão", "Chipre", "Croácia",
            "Dinamarca", "Eslováquia", "Eslovênia", "Espanha", "Estônia", "Finlândia",
            "França", "Grécia", "Hungria", "Irlanda", "Islândia", "Itália", "Letônia",
            "Liechtenstein", "Lituânia", "Luxemburgo", "Malta", "Moldávia", "Mônaco",
            "Montenegro", "Noruega", "Países Baixos", "Polônia", "Portugal", "Tchéquia",
            "Macedônia do Norte", "Reino Unido", "Rússia", "San Marino", "Sérvia", "Suécia",
            "Suíça", "Turquia", "Ucrânia", "Vaticano"]
        return (
            <div>
                {this.generatePaises(paiseseuropa)}
            </div>
        )
    }
}