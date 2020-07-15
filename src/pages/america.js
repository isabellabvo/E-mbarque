import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefaultTemplate from "../templates/default/default.template"
import Topbar from "../container/america/america.container"
import Conteudo from "../container/america/about.container"
import Paises from "../container/america/paises.container"
const America = () => (
  <div>
    <Topbar></Topbar>
    <Conteudo></Conteudo>
    <Paises></Paises>
  </div>
)

export default America