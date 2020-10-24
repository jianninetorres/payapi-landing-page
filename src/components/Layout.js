import React from "react"

import "../styles/normalize.css"
import "../styles/reset.css"
import GlobalStyles from "../styles/GlobalStyles"
import Nav from "../components/Nav"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <div>{children}</div>
  </>
)

export default Layout
