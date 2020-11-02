import React from "react"

import styled from "styled-components"

const ParagraphStyles = styled.p`
  &.white {
    color: var(--white);
  }
  text-align: center;
  line-height: 2;
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 450px;
    margin-bottom: calc(var(--base-size) * 2);
  }
`

const P = ({ children, color }) => {
  return <ParagraphStyles className={color}>{children}</ParagraphStyles>
}

export default P
