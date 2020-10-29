import React from "react"

import styled from "styled-components"

import bgCircle from "../../assets/images/bg-pattern-circle.svg"

const SectionStyles = styled.section`
  padding: calc(var(--base-size) * 3) var(--base-size);
  @media screen and (min-width: 768px) {
    padding-left: calc(var(--base-size) * 4);
    padding-right: calc(var(--base-size) * 4);
  }

  &.bg-circle-left {
    @media screen and (min-width: 768px) {
      background: url(${bgCircle}) no-repeat 70vw center;
      background-size: contain;
    }
  }
`

const SectionStylesContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

const Section = ({ children, background }) => {
  return (
    <SectionStyles className={background}>
      <SectionStylesContainer>{children}</SectionStylesContainer>
    </SectionStyles>
  )
}

export default Section
