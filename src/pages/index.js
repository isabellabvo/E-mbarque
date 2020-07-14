import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopbarContainer from "../container/topbar/topbar.container"
import FooterContainer from "../container/footer/footer.container"
import DefaultTemplate from "../templates/default/default.template"
import AboutContainer from "../container/about/about.container"
import MissaoContainer from "../container/missao/missao.container"
import Continentes from "../container/continentes/continentes.container"
import BuscaEspecifica from "../container/buscaesp/buscaesp.container"
import Comentarios from "../container/comentarios/cometarios.container"

const IndexPage = () => (
  <DefaultTemplate>
    <AboutContainer></AboutContainer>
    <MissaoContainer></MissaoContainer>
    <Continentes></Continentes>
    <BuscaEspecifica></BuscaEspecifica>
    <Comentarios></Comentarios>
  </DefaultTemplate>
)

export default IndexPage
