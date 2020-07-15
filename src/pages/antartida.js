import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/antartida/antartida.container"
import Conteudo from "../container/antartida/about.container"
import Paises from "../container/america/paises.container"
const Antartida = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>

  </div>
)

export default Antartida