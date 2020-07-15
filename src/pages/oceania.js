import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/oceania/oceania.container"
import Conteudo from "../container/oceania/about.container"
import Paises from "../container/oceania/paises.container"
const Oceania = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>
    <Paises></Paises>
  </div>
)

export default Oceania