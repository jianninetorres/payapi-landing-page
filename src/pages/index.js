import React from "react"
import styled from "styled-components"

import bgCircle from "../assets/images/bg-pattern-circle.svg"
import phone from "../assets/images/phone.svg"

const HeaderStyles = styled.section`
  display: flex;
  justify-content: center;
  background: url(${bgCircle}) no-repeat center -100px;
  background-size: 120% 320px;
`

const HeaderTextStyles = styled.section`
  padding: var(--base-size);
  text-align: center;

  h1 {
    font-size: calc(var(--base-size) * 2);
  }
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
      <HeaderTextStyles>
        <h1>Start building with our APIs for absolutely free</h1>
      </HeaderTextStyles>
    </>
  )
}
