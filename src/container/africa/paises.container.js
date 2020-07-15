import React from 'react'
import './paises.container.style.scss'
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
            let paisesafrica=[
                "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic"
                , "Chad", "Camoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Egypt",
                "Equatorial Guinea","Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana","Guinea","Guinea-Bissau",
                "Ivory Coast","Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali",
                "Mauritania", "Mauritius", "Morocco","Mozambique", "Namibia", "Niger", "Nigeria", 
                "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
                "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia","Uganda","Zambia", "Zimbabwe"]
        return(
            <div>
                {this.generatePaises(paisesafrica)}
            </div>
        )
        }
    }