import React from "react"
import styled from "styled-components"

import bgCircle from "../assets/images/bg-pattern-circle.svg"
import phone from "../assets/images/phone.svg"
import tesla from "../assets/images/tesla.svg"
import microsoft from "../assets/images/microsoft.svg"
import google from "../assets/images/google.svg"
import hewlettPackard from "../assets/images/hewlett-packard.svg"
import nvidia from "../assets/images/nvidia.svg"
import oracle from "../assets/images/oracle.svg"
import implement from "../assets/images/implement.svg"

import Section from "../components/Section"
import HalfPanel from "../components/HalfPanel"
import FlexCentered from "../components/FlexCentered"
import PanelDescription from "../components/PanelDescription"
import H1 from "../components/H1"
import P from "../components/Paragraph"
import Form from "../components/Form"
import Contact from "../components/Contact"
import Image from "../components/Image"
import Button from "../components/Button"

const HeaderStyles = styled.section`
  background: url(${bgCircle}) no-repeat center -100px;
  background-size: 120% 320px;
`

const PhoneStyles = styled.img`
  width: 300px;
`

const WhoWeWorkWithStyles = styled.section`
  background: url(${bgCircle}) no-repeat center -100px;
  background-color: var(--blue-black);
  background-size: 120% 350px;
  @media screen and (min-width: 768px) {
    background-position: -150px -250px;
    background-size: 600px;
  }
`

const CompaniesGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: calc(var(--base-size) * 3);
  justify-items: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  @media screen and (min-width: 768px) {
    grid-gap: calc(var(--base-size) * 4) calc(var(--base-size) * 2);
    padding: 0 var(--base-size);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 0 calc(var(--base-size) * 2);
  }
`

export default function Home() {
  return (
    <>
      <HeaderStyles>
        <FlexCentered>
          <PhoneStyles src={phone} alt="" />
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
      <WhoWeWorkWithStyles>
        <Section>
          <HalfPanel>
            <CompaniesGridStyles>
              <Image image={tesla} alt="tesla" />
              <Image image={microsoft} alt="microsoft" />
              <Image image={hewlettPackard} alt="hewlett packard" />
              <Image image={oracle} alt="oracle" />
              <Image image={google} alt="google" />
              <Image image={nvidia} alt="nvidia" />
            </CompaniesGridStyles>
            <PanelDescription className="left">
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
      <Section>
        <HalfPanel>
          <FlexCentered>
            <Image image={implement} alt="terminal" />
          </FlexCentered>
          <PanelDescription>
            <H1>Easy to implement</H1>
            <P>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </P>
          </PanelDescription>
        </HalfPanel>
      </Section>
    </>
  )
}
