import React from 'react'
import './popup.component.style.css'


export default class PopUpComponent extends React.Component {

    render() {
        return (
            <div className="popup__wrapper">
                <div className="popup">
                    <p className="popup__title">{this.props.title}</p>
                    <p>{this.props.body}</p>
                    <p className="titu">Digite as seguintes informações</p>
                    <div className="card1">
                        <p className="info1">Nome</p>
                    </div>
                    <div className="card2">
                        <p className="info2">Email</p>
                    </div>
                    <div className="card3">
                        <p className="info3">Local de interesse</p>
                    </div>
                    <button className="popup__button" onClick={this.props.closePopUp}>Enviar</button>
                </div>
            </div>
        )
    }
}
