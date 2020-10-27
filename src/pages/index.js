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

import Section from "../components/Section"
import HalfPanel from "../components/HalfPanel"
import Form from "../components/Form"
import Contact from "../components/Contact"
import Image from "../components/Image"
import Button from "../components/Button"

const HeaderStyles = styled.section`
  display: flex;
  justify-content: center;
  background: url(${bgCircle}) no-repeat center -100px;
  background-size: 120% 320px;
`

const PhoneStyles = styled.img`
  width: 300px;
  padding-left: 30px;
`

const WhoWeWorkWithStyles = styled.section`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  background: url(${bgCircle}) no-repeat center -100px;
  background-color: var(--blue-black);
  background-size: 120% 350px;
  padding: calc(var(--base-size) * 4) var(--base-size);
  @media screen and (min-width: 768px) {
    background-position: -100%;
    background-size: contain;
    padding-left: calc(var(--base-size) * 4);
    padding-right: calc(var(--base-size) * 4);
  }
`

const CompaniesDescriptionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  padding: 0 var(--base-size);
  @media screen and (min-width: 768px) {
    order: -1;
    align-items: flex-start;
  }
`

const CompaniesGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: calc(var(--base-size) * 4) calc(var(--base-size) * 2);
  justify-items: center;
  align-items: center;
  width: 100%;
  flex-basis: 600px;
  padding: 0 var(--base-size);
`

const WhiteH1 = styled.h1`
  color: var(--white);
  text-align: center;
  margin: calc(var(--base-size) * 4) 0 calc(var(--base-size) * 2);
  @media screen and (min-width: 768px) {
    margin-top: calc(var(--base-size) * 2);
    text-align: left;
  }
`

const WhiteP = styled.p`
  color: var(--white);
  text-align: center;
  margin-bottom: calc(var(--base-size) * 2);
  line-height: 2;
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 500px;
  }
`

export default function Home() {
  return (
    <>
      <HeaderStyles>
        <PhoneStyles src={phone} alt="" />
      </HeaderStyles>
      <Section>
        <Form
          title="Start building with our APIs for absolutely free"
          placeholder="Enter email address"
          buttonText="Schedule a Demo"
          bgColor="hot-pink"
        />
      </Section>
      <Section>
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
            <CompaniesDescriptionStyles>
              <WhiteH1>Who we work with</WhiteH1>
              <WhiteP>
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </WhiteP>
              <Button type="button" text="About us" bgColor="blue-black" />
            </CompaniesDescriptionStyles>
          </HalfPanel>
        </Section>
      </WhoWeWorkWithStyles>
      <Section>
        <h1>Easy to implement</h1>
      </Section>
    </>
  )
}
