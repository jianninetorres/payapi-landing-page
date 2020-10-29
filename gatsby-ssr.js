import React from "react"
import Layout from "./src/components/structural/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
