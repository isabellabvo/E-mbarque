import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopbarContainer from "../container/topbar/topbar.container"
import FooterContainer from "../container/footer/footer.container"
import DefaultTemplate from "../templates/default/default.template"
import Texto from "../container/random/texto"
import Ferramenta from "../container/random/ferramenta"


const Random = () => (
  <DefaultTemplate>
        <Texto></Texto>
        <Ferramenta></Ferramenta>
  </DefaultTemplate>
)

export default Random
