import React from 'react'
import "./contatinhos.scss"
import mail from "../../images/mail.png"
import linkedin from "../../images/linkedin.png"
import logosf from "../../images/logosflabs.png"
import localizacaosf from "../../images/localizacaosf.jpg"
import final from "../../images/partefinalsobrenos.png"

export default class Cards extends React.Component {
    render() {
        return (
            <div>
                <p className="missao10">
                    Isabella Oliveira
                </p>
                <p className="missao20">
                    Gustavo Tamanaka
                </p>
                <p className="missao30">
                    Douglas Kodama
                </p>
                <div className="mail">
                    <img src={mail} />
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/isabellaburmaian/"  target="_blank">
                    <img src={linkedin} />
                    </a>
                </div>
                <div className="mail2">
                    <img src={mail} />
                </div>
                <div className="linkedin2">
                    <img src={linkedin} />
                </div>
                <div className="mail3">
                    <img src={mail} />
                </div>
                <div className="linkedin3">
                    <img src={linkedin} />
                </div>
                <p className="infosf"> </p>
                
                <div className="logosf">
                    <img src={logosf} />
                </div>
                <p className="nomeempresa">
                    SF Labs
                </p>
                <p className="emailempresa">
                    <span class="textoamarelo">Email</span>: contato@sflabs.com.br
                </p>
                <p className="telefoneempresa">
                <span class="textoamarelo">Telefone</span>: (11) 95774-8642
                </p>
                <p className="enderecoempresa">
                <span class="textoamarelo">Endereço</span>: R. Alfredo Lopes, 1717 - E8 - Jardim Macarengo, São Carlos
                </p>
                <div className="imagemtop">
                    <img src={localizacaosf} />
                </div>
                <div className="final">
                    <img src={final} />
                </div>
            </div>
        )
    }
}