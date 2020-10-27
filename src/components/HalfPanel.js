import React from "react"

import styled from "styled-components"

const HalfPanelStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--base-size);
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HalfPanel = ({ children }) => {
  return <HalfPanelStyles>{children}</HalfPanelStyles>
}

export default HalfPanel
