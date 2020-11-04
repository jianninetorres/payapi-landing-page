import React from "react"

import styled from "styled-components"

const HeadingStyles = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: ${props => props.fontSize || "24px"};
  color: ${props => props.color || `var(--blue-grey)`};
  margin-bottom: ${props => props.marginBottom || "16px"};
`

const H3Heading = ({ children, color, fontSize, marginBottom }) => {
  return (
    <HeadingStyles
      color={color}
      fontSize={fontSize}
      marginBottom={marginBottom}
    >
      {children}
    </HeadingStyles>
  )
}

export default H3Heading
