import React from 'react'
import PaisesBotãoComponent from "./paisesbot.container"
export default class Paises extends React.Component{
    generatePaises(paises){
        let retorno =[];
        paises.forEach(paises => {
            retorno.push(
                <PaisesBotãoComponent pais={paises}>
                </PaisesBotãoComponent>
            )
        });
        return retorno
    }
        render(){
            let paisesamerica=[
                "Central", "Sul", "Norte"]
        return(
            <div>
                {this.generatePaises(paisesamerica)}
            </div>
        )
        }
    }