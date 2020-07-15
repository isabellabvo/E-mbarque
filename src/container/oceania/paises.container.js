import React from 'react'
import PaisesBotãoComponent from "./paisesbot.container"
export default class Paises extends React.Component{
    generatePaises(paises){
        let retorno =[];
        paises.forEach(paises => {
            retorno.push(
                <PaisesBotãoComponent pais={paises.paises}>
                </PaisesBotãoComponent>
            )
        });
        return retorno
    }
        render(){
            let paisesoceania=[
                "Austrália", "Estados Federados da Micronésia", "Fiji", "Ilhas Marshall",
                "Ilhas Salomão", "Kiribati", "Nauru", "Nova Zelândia", "Palau", "Papua-Nova Guiné",
                "Samoa", "Tonga", "Tuvalu", "Vanuatu"]
        return(
            <div>
                {this.generatePaises(paisesoceania)}
            </div>
        )
        }
    }