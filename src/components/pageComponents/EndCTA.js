import React from "react"

import styled from "styled-components"

import Section from "../structural/Section"
import Form from "../structural/Form"

const EndCTAStyles = styled.div`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const H1Styles = styled.h1`
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const EndCTA = ({ title }) => {
  return (
    <Section>
      <EndCTAStyles>
        <div>
          <H1Styles>{title}</H1Styles>
        </div>
        <div>
          <Form
            placeholder="Enter email address"
            buttonText="Schedule a Demo"
            bgColor="hot-pink"
          />
        </div>
      </EndCTAStyles>
    </Section>
  )
}

export default EndCTA
