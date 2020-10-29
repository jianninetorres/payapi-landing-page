import React from "react"

import styled from "styled-components"

import bgCircle from "../../assets/images/bg-pattern-circle.svg"

import Section from "../../components/structural/Section"
import HalfPanel from "../../components/structural/HalfPanel"
import CompaniesGrid from "../../components/pageComponents/CompaniesGrid"
import PanelDescription from "../../components/structural/PanelDescription"
import H1 from "../../components/structural/H1"
import P from "../../components/structural/Paragraph"
import Button from "../../components/structural/Button"

const WhoWeWorkWithStyles = styled.section`
  background: url(${bgCircle}) no-repeat center -100px;
  background-color: var(--blue-black);
  background-size: 120% 350px;
  @media screen and (min-width: 768px) {
    background-position: -150px -250px;
    background-size: 600px;
  }
`

const WhoWeWorkWith = () => {
  return (
    <WhoWeWorkWithStyles>
      <Section>
        <HalfPanel>
          <CompaniesGrid />
          <PanelDescription order="left">
            <H1 color="white">Who we work with</H1>
            <P color="white">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </P>
            <Button type="button" text="About us" bgColor="blue-black" />
          </PanelDescription>
        </HalfPanel>
      </Section>
    </WhoWeWorkWithStyles>
  )
}

export default WhoWeWorkWith