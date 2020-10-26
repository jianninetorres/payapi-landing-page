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

const WhoWeWorkWithStyles = styled.div`
  background-color: var(--blue-black);
`

const CompaniesDescriptionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(var(--base-size) * 4);
`

const CompaniesGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 0 calc(var(--base-size) * 2);
  background: url(${bgCircle}) no-repeat center -100px;
  background-size: 120% 350px;
  justify-items: center;
  align-items: center;
  padding: calc(var(--base-size) * 4) 16px;
`

const WhiteH1 = styled.h1`
  color: var(--white);
  text-align: center;
  margin-bottom: calc(var(--base-size) * 2);
`

const WhiteP = styled.p`
  color: var(--white);
  text-align: center;
  margin-bottom: calc(var(--base-size) * 2);
  line-height: 2;
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
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </WhiteP>
          <Button type="button" text="About us" bgColor="blue-black" />
        </CompaniesDescriptionStyles>
      </WhoWeWorkWithStyles>
    </>
  )
}
