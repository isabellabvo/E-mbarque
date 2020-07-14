import React from 'react'
import "./about.container.style.css"
import pc from '../../images/pc.png'
import boardingpass from '../../images/boarding-pass.png'
export default class AboutContainer extends React.Component {
    render() {
        return (
            <div>
                <p className="nomesecao">
                    O que é a <span className="embarque">
                        E-mbarque
                    </span>?
                    <div className="pc">
                        <img src={pc} />
                    </div>
                    <div className="boardingpass">
                        <img src={boardingpass} />
                    </div>
                    <div className="circle1">

                    </div>
                    <div className="circle2">
                        
                    </div>
                </p>
                <p className="paragrafo">
                    Durante a pandemia do vírus COVID-19 não é recomendado por
                </p>
                <p className="paragrafo">
                    especialistas da saúde, sair de casa a não ser por razões urgentes
                </p>
                <p className="paragrafo">
                    e necessárias. Assim, quem gosta de viajar tem que aguardar um
                </p>
                <p className="paragrafo">
                    pouco a situação se atenuar. Mas não se preocupe!
                </p>
                <p className="paragrafoatencao">
                    Por que não fazer um e-mbarque conhecendo diversos lugares de forma segura e gratuita?
                </p>

            </div>
        )
    }
}