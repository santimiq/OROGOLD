import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Components
import SectionForm from "../components/Form"
import Tratamiento from "../components/Tratamiento"


const IndexPage = () => (

    <Layout>
      <SectionForm />
      <Tratamiento />
    </Layout>

)

export default IndexPage
