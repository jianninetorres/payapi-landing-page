import React from "react"

import TopBackgroundCicle from "../components/structural/TopBackgroundCircle"
import Section from "../components/structural/Section"
import HalfPanel from "../components/structural/HalfPanel"
import PanelDescription from "../components/structural/PanelDescription"
import HeroSection from "../components/structural/HeroSection"
import HeaderH2 from "../components/structural/HeaderH2"
import FormLong from "../components/structural/FormLong"

export default function Contact() {
  return (
    <>
      <TopBackgroundCicle>
        <Section>
          <HeroSection>
            <HeaderH2>
              Submit a help request and we’ll get in touch shortly.
            </HeaderH2>
          </HeroSection>
        </Section>
        <Section>
          <HalfPanel>
            <PanelDescription>
              <FormLong />
            </PanelDescription>
          </HalfPanel>
        </Section>
      </TopBackgroundCicle>
    </>
  )
}
