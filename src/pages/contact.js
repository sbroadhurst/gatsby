import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is by{" "}
        <a href="https://google.com" target="_blank" rel="noreferrer">
          emailing me.
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
