import React from "react"

import styled from "styled-components"

const GridStyles = styled.div`
  display: grid;
`

const Grid = ({ children }) => {
  return <GridStyles>{children}</GridStyles>
}

export default Grid
