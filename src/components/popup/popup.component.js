import React from 'react'
import './popup.component.style.css'

export default class PopUpComponent extends React.Component {

    render() {
        return (
            <div className="popup__wrapper">
                <div className="popup">
                    <p className="popup__title">{this.props.title}</p>
                    <p>{this.props.body}</p>
                    <button className="popup__button" onClick={this.props.closePopUp}>OK</button>
                </div>
            </div>
        )
    }
}