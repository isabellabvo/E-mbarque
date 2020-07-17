import React from 'react'
import './popup.container.style.css'
import PopUpComponent from '../../components/popup/popup.component'

export default class PopUpHolderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showPopUp: false }
    }

    togglePopUp() {
        this.setState({ showPopUp: !this.state.showPopUp })
    }

    render() {
        return (
            <div>
                <p className="nomesecao">Saiba mais</p>
                <p className="subtitulo">Para obter mais informações...</p>
                <button onClick={() => { this.togglePopUp() }} className="salveobotao">Clique aqui</button>
                {
                    this.state.showPopUp &&
                    <PopUpComponent
                        title="Seja um membro!"
                        body="Receba dicas, notícias, promoções dos locais de sua escolha!"
                        closePopUp={this.togglePopUp.bind(this)}
                    ></PopUpComponent>
                }
            </div>
        )
    }
}