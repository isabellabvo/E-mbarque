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
            let paisesasia=[
                "Afeganistão", "Arábia Saudita", "Armênia", "Azerbaijão", "Bahrein", "Bangladesh",
                "Brunei", "Butão", "Camboja", "Cazaquistão", "Catar", "China", "Chipre",
                "Cingapura", "Coreia do Norte", "Coreia do Sul", "Emirados Árabes", "Filipinas",
                "Geórgia", "Iêmen" ,"Índia", "Indonésia", "Irã", "Iraque", "Israel", "Japão",
                "Jordânia", "Kuwait", "Laos", "Líbano", "Malásia", "Maldivas", "Mianmar",
                "Mongólia", "Nepal", "Omã", "Paquistão", "Quirguistão", "Rússia", "Síria",
                "Sri Lanka", "Tajiquistão", "Tailândia", "Timor-Leste", "Turquia", "Uzbequistão",
                "Vietnã"]   
        return(
            <div>
                {this.generatePaises(paisesasia)}
            </div>
        )
        }
    }