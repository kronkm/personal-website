import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>Whoops!</h1>
    <p>You must"ve gotten lost out in the wilderness here.</p>
    <Link to="/">Here"s a link to find your way back to camp!</Link>
  </Layout>
)

export default NotFoundPage
