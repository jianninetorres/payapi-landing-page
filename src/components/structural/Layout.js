import React from "react"

import "../../styles/normalize.css"
import "../../styles/reset.css"
import GlobalStyles from "../../styles/GlobalStyles"
import Nav from "./Nav"
import styled from "styled-components"

const MainContentStyles = styled.div`
  padding: calc(var(--base-size) * 5) 0;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <MainContentStyles>{children}</MainContentStyles>
  </>
)

export default Layout