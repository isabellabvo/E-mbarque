import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/asia/asia.container"
import Conteudo from "../container/asia/about.container"
import Paises from "../container/asia/paises.container"
const Asia = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>
    <Paises></Paises>
  </div>
)

export default Asia