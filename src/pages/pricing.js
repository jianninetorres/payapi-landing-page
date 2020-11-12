import React from "react"
import HeroSection from "../components/structural/HeroSection"
import HeaderH2 from "../components/structural/HeaderH2"
import PricingColumn from "../components/structural/PricingColumn"
import Section from "../components/structural/Section"
import TopBackgroundCicle from "../components/structural/TopBackgroundCircle"
import EndCTA from "../components/pageComponents/EndCTA"

import styled from "styled-components"

const PricingColumnContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(var(--base-size) * 2) 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: calc(var(--base-size) * 2) calc(var(--base-size) - 6px);
    text-align: left;
  }
`

export default function Pricing() {
  return (
    <>
      <TopBackgroundCicle>
        <Section>
          <HeroSection>
            <HeaderH2>Pricing</HeaderH2>
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
              ]}
            />
          </PricingColumnContainerStyles>
        </Section>
        <EndCTA title="Ready to start?" />
      </TopBackgroundCicle>
    </>
  )
}
