import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Components
import SectionForm from "../components/form"
import Tratamiento from "../components/tratamiento"
import Nosotros from "../components/nosotros"
import Mapa from "../components/mapa"
import Oportunidad from "../components/oportunidad"

import scrollTo from "gatsby-plugin-smoothscroll"


const IndexPage = () => (

  <Layout>
    <SectionForm />
    <Tratamiento />
    <Nosotros />
    <Mapa />
    <Oportunidad />
  </Layout>
)

export default IndexPage
