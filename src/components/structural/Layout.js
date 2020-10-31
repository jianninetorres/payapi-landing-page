import React from "react"

import "../../styles/normalize.css"
import "../../styles/reset.css"
import GlobalStyles from "../../styles/GlobalStyles"
import Nav from "./Nav"
import Footer from "./Footer"

import styled from "styled-components"

const MainContentStyles = styled.div`
  padding: calc(var(--base-size) * 5) 0 0;
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <MainContentStyles>{children}</MainContentStyles>
    <Footer />
  </>
)

export default Layout
