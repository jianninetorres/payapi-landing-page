import React from "react"
import styled from "styled-components"

import bgCircle from "../assets/images/bg-pattern-circle.svg"

import implement from "../assets/images/implement.svg"
import simpleUI from "../assets/images/simple-ui.svg"

import Section from "../components/structural/Section"
import HalfPanel from "../components/structural/HalfPanel"
import FlexCentered from "../components/structural/FlexCentered"
import PanelDescription from "../components/structural/PanelDescription"
import P from "../components/structural/Paragraph"
import Form from "../components/structural/Form"
import Contact from "../components/structural/Contact"
import Image from "../components/structural/Image"

import Phone from "../components/pageComponents/Phone"
import FeaturesGrid from "../components/pageComponents/FeaturesGrid"
import WhoWeWorkWith from "../components/pageComponents/WhoWeWorkWith"
import EndCTA from "../components/pageComponents/EndCTA"

const HeaderStyles = styled.section`
  background: url(${bgCircle}) no-repeat center -100px;
  background-size: 120% 320px;
`

const H1Styles = styled.h1`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

export default function Home() {
  return (
    <>
      <HeaderStyles>
        <FlexCentered>
          <Phone />
        </FlexCentered>
      </HeaderStyles>
      <Section>
        <Form
          title="Start building with our APIs for absolutely free"
          placeholder="Enter email address"
          buttonText="Schedule a Demo"
          bgColor="hot-pink"
        />
        <Contact description="Have any questions?" />
      </Section>
      <WhoWeWorkWith />
      <Section>
        <HalfPanel>
          <FlexCentered>
            <Image image={implement} alt="terminal" />
          </FlexCentered>
          <PanelDescription>
            <H1Styles>Easy to implement</H1Styles>
            <P>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </P>
          </PanelDescription>
        </HalfPanel>
      </Section>
      <Section background="bg-circle-left">
        <HalfPanel>
          <FlexCentered>
            <Image image={simpleUI} alt="simple UI" />
          </FlexCentered>
          <PanelDescription order="left">
            <H1Styles>Simple UI & UX</H1Styles>
            <P>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </P>
          </PanelDescription>
        </HalfPanel>
      </Section>
      <FeaturesGrid />
      <EndCTA title="Ready to start?" />
    </>
  )
}
