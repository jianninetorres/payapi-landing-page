import React from "react"

import styled from "styled-components"

const H1Styles = styled.h1`
  &.white {
    color: var(--white);
  }
  text-align: center;
  margin: 0 0 calc(var(--base-size) * 2);
  @media screen and (min-width: 768px) {
    margin-top: calc(var(--base-size) * 2);
    text-align: left;
  }
`

const H1 = ({ children, color }) => {
  return <H1Styles className={color}>{children}</H1Styles>
}

export default H1
