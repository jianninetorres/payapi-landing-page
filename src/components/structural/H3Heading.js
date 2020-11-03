import React from "react"

import styled from "styled-components"

const HeadingStyles = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: calc(var(--base-size) * 1.5);
  color: ${props => props.color || `var(--blue-grey)`};
  margin-bottom: var(--base-size);
`

const H3Heading = ({ children, color }) => {
  return <HeadingStyles color={color}>{children}</HeadingStyles>
}

export default H3Heading
