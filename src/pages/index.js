import React from "react"
import styled from "styled-components"

import bgCircle from "../assets/images/bg-pattern-circle.svg"
import phone from "../assets/images/phone.svg"

import Section from "../components/Section"
import Form from "../components/Form"
import Contact from "../components/Contact"

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
      <Section></Section>
    </>
  )
}
