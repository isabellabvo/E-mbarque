import React from 'react'
import './comentarios.container.style.css'
import profile1 from "../../images/profile.jpg"
import profile2 from "../../images/profile2.jpg"
import profile3 from "../../images/profile3.jpg"
import profile4 from"../../images/profile4.jpg"

export default class Comentarios extends React.Component {
    render() {
        return (
            <div>
                <p className="nomesecao">Comentários</p>
                <div className="profile1">
                    <img src={profile1} />
                </div>
                <p className="usuario1">Joana Medeiros</p>
                <p className="comentario1">
                Adorei o site! Consegui aprender muito sobre os países e me distrai na quarentena!
                <br></br>
                Consegui matar um pouco a minha vontade de visitar a Indonésia.
               <p className="interacoes1">Curtir · Responder · 4 hrs </p>
                </p>
                <div className="profile2">
                    <img src={profile2} />
                </div>
                <p className="usuario2">Carlos Siqueira</p>
                <p className="comentario2">
                Ah esse país é maravilhoso! Já fui faz um tempo, vale a pena visitar depois que tudo isso passar!
                <br></br>
                Se quiser alguma dica pode me chamar!
                </p>
                <p className="interacoes2">Curtir · Responder · 3 hrs </p>
                <div className="profile3">
                    <img src={profile3} />
                </div>
                <p className="usuario3">Lari Ladeira</p>
                <p className="comentario3">
                Sempre que possível viajo pelo Sudeste Asiático! É muito enriquedor!
                </p>
                <p className="interacoes3">Curtir · Responder · 2 hrs </p>
                <div className="profile4">
                    <img src={profile4} />
                </div>
                <p className="usuario4">Davi Costa</p>
                <p className="comentario3">
                <span className="textoazul" >@LariLadeira</span> não deixe de ir nas Ilhas Raja Ampat!! Vale muito a pena! Boa viagem!                 </p>
                <p className="interacoes3">Curtir · Responder · 2 hrs </p>
                <div className="card">
                    <p className="titulocard">Adicione um comentário...</p>
                </div>
                <button className="botaoenvio">Enviar</button>
            </div>
        )
    }
}
