import React from "react"

import styled from "styled-components"

const SectionStyles = styled.section`
  padding: 0 var(--base-size);
`

const Section = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>
}

export default Section
