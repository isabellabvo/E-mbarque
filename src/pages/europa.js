import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/europa/europa.container"
import Conteudo from "../container/europa/about.container"
import Paises from "../container/europa/paises.container"
const Europa = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>
    <Paises></Paises>
  </div>
)

export default Europa