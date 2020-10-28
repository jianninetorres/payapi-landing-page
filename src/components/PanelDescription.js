import React from "react"

import styled from "styled-components"

const PanelDescriptionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  padding-top: calc(var(--base-size) * 2);
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 0 var(--base-size);
  }
  &.left {
    @media screen and (min-width: 768px) {
      order: -1;
    }
  }
`
const PanelDescription = ({ children }) => {
  return <PanelDescriptionStyles>{children}</PanelDescriptionStyles>
}
export default PanelDescription
