import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Hello.</h1>
      <p>I am currently learning Gatsby</p>
      <Link to="/contact"> Want to work with me? Reach out.</Link>
    </Layout>
  )
}

export default AboutPage
