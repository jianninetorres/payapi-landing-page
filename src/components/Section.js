import React from "react"

import styled from "styled-components"

const SectionStyles = styled.section`
  padding: 0 var(--base-size);
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
