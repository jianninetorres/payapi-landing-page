import React from "react"

import styled from "styled-components"

const ParagraphStyles = styled.p`
  &.white {
    color: var(--white);
  }
  text-align: ${props => props.textAlign || "center"};
  line-height: 2;
  margin-bottom: var(--base-size);
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 450px;
    margin-bottom: calc(var(--base-size) * 2);
  }
`

const P = ({ children, color, textAlign }) => {
  return (
    <ParagraphStyles className={color} textAlign={textAlign}>
      {children}
    </ParagraphStyles>
  )
}

export default P
