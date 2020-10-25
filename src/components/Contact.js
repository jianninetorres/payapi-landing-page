import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ContactStyles = styled.section`
  display: flex;
  justify-content: center;
  a {
    color: var(--blue-grey);
    font-family: "Roboto Medium", sans-serif;
    font-weight: 500;
  }
`

const Contact = ({ description, linkText }) => {
  return (
    <ContactStyles>
      <p>
        {description} <Link to="/contact">Contact us</Link>
      </p>
    </ContactStyles>
  )
}

export default Contact
