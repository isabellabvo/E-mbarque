import React from 'react'
import './about.container.style.scss'
import america from "../../images/america.png"
import fundoamerica from "../../images/buscaespAM.jpg"
export default class Conteudo extends React.Component{
    render(){
        return(
            <body className="body">
                <div className="imagemcentral0">
                    <img src={america} />                    
                </div>
                <div className="circuloam1">
                    35 países e 16 colônias
                </div>
                <div className="circuloam2">
                    42.550.000 km²
                </div>
                <div className="circuloam3">
                    1.061 línguas vivas
                </div>
                <div className="circuloam4">
                    902 892 047 habitantes
                </div>
                <p className="secao">Busca Específica</p>

                <div className="fundoamerica">
                    <p className="convite">Qual local da América você deseja conhecer?</p>
                    <img src={fundoamerica} />
                </div>
                <p className="secao">Divisão</p>

            </body>
        )
    }
}