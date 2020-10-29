import React from "react"
import Image from "../structural/Image"

import styled from "styled-components"

import tesla from "../../assets/images/tesla.svg"
import microsoft from "../../assets/images/microsoft.svg"
import google from "../../assets/images/google.svg"
import hewlettPackard from "../../assets/images/hewlett-packard.svg"
import nvidia from "../../assets/images/nvidia.svg"
import oracle from "../../assets/images/oracle.svg"

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
const CompaniesGrid = () => {
  return (
    <CompaniesGridStyles>
      <Image image={tesla} alt="tesla" />
      <Image image={microsoft} alt="microsoft" />
      <Image image={hewlettPackard} alt="hewlett packard" />
      <Image image={oracle} alt="oracle" />
      <Image image={google} alt="google" />
      <Image image={nvidia} alt="nvidia" />
    </CompaniesGridStyles>
  )
}

export default CompaniesGrid
