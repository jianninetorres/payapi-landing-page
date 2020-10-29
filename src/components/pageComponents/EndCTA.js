import React from "react"

import styled from "styled-components"

import Section from "../structural/Section"
import H1 from "../structural/H1"
import Form from "../structural/Form"

const EndCTAStyles = styled.div`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const EndCTA = ({ title }) => {
  return (
    <Section>
      <EndCTAStyles>
        <div>
          <H1>{title}</H1>
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
