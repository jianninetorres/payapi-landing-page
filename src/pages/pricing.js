import React from "react"
import HeroSection from "../components/structural/HeroSection"
import PricingColumn from "../components/structural/PricingColumn"
import Section from "../components/structural/Section"
import TopBackgroundCicle from "../components/structural/TopBackgroundCircle"
import EndCTA from "../components/pageComponents/EndCTA"

import styled from "styled-components"

const H2Styles = styled.h2`
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`

const HeaderH2Styles = styled(H2Styles)`
  font-size: calc(var(--base-size) * 3);
  @media screen and (min-width: 1024px) {
    max-width: 550px;
  }
`
const PricingColumnContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--base-size);
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: calc(var(--base-size) * 2);
    text-align: left;
  }
`

export default function Pricing() {
  return (
    <>
      <TopBackgroundCicle>
        <Section>
          <HeroSection>
            <HeaderH2Styles>Pricing</HeaderH2Styles>
          </HeroSection>
        </Section>
        <Section>
          <PricingColumnContainerStyles>
            <PricingColumn
              title="Free plan"
              columnDescription="Build and test using our core set of products with up to 100 API requests"
              price="$0.00"
              features={[
                { name: "Transactions", checked: "checked" },
                { name: "Auth", checked: "checked" },
                { name: "Identity", checked: "checked" },
                { name: "Investments", checked: "" },
                { name: "Assets", checked: "" },
                { name: "Liabilities", checked: "" },
                { name: "Income", checked: "" },
                { name: "Request Access", checked: "" },
                ,
              ]}
            />
            <PricingColumn
              title="Basic Plan"
              columnDescription="Launch your project with unlimited requests and no contractual minimums"
              price="$249.00"
              features={[
                { name: "Transactions", checked: "checked" },
                { name: "Auth", checked: "checked" },
                { name: "Identity", checked: "checked" },
                { name: "Investments", checked: "checked" },
                { name: "Assets", checked: "checked" },
                { name: "Liabilities", checked: "" },
                { name: "Income", checked: "" },
                { name: "Request Access", checked: "" },
                ,
              ]}
            />
            <PricingColumn
              title="Premium Plan"
              columnDescription="Get tailored solutions, volume pricing, and dedicated support for your team"
              price="$499.00"
              features={[
                { name: "Transactions", checked: "checked" },
                { name: "Auth", checked: "checked" },
                { name: "Identity", checked: "checked" },
                { name: "Investments", checked: "checked" },
                { name: "Assets", checked: "checked" },
                { name: "Liabilities", checked: "checked" },
                { name: "Income", checked: "checked" },
                { name: "Request Access", checked: "checked" },
                ,
              ]}
            />
          </PricingColumnContainerStyles>
        </Section>
        <EndCTA title="Ready to start?" />
      </TopBackgroundCicle>
    </>
  )
}
