import React from "react"

import styled from "styled-components"

const SectionStyles = styled.section`
  padding: calc(var(--base-size) * 4) var(--base-size);
  @media screen and (min-width: 768px) {
    padding-left: calc(var(--base-size) * 4);
    padding-right: calc(var(--base-size) * 4);
  }
`

const SectionStylesContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

const Section = ({ children }) => {
  return (
    <SectionStyles>
      <SectionStylesContainer>{children}</SectionStylesContainer>
    </SectionStyles>
  )
}

export default Section
