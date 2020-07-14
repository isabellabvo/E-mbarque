import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/africa/africa.container"
import Conteudo from "../container/africa/about.container"
import Paises from "../container/africa/paises.container"
const Africa = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>
    <Paises></Paises>
  </div>
)

export default Africa