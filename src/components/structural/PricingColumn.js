import React from "react"
import P from "../structural/Paragraph"

import styled from "styled-components"

import checkmarkPink from "../../assets/images/checkmark-hot-pink.svg"

const PricingColumnStyles = styled.div`
  h3 {
    font-family: "Libre Baskerville", serif;
    font-weight: bold;
    font-size: calc(var(--base-size) * 1.5);
    color: var(--hot-pink);
    margin-bottom: var(--base-size);
  }

  h2,
  hr {
    margin-bottom: calc(var(--base-size) * 2);
  }

  ul {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-width: none;
    }
  }

  li {
    margin-bottom: var(--base-size);
    padding-left: calc(var(--base-size) * 2);

    &.checked {
      background: url(${checkmarkPink}) no-repeat;
      background-size: var(--base-size);
    }
  }
`

const PricingColumn = ({ title, columnDescription, price, features }) => {
  const listFeatures = features.map(feature => {
    return (
      <li key={feature.name} className={feature.checked}>
        {feature.name}
      </li>
    )
  })
  return (
    <PricingColumnStyles>
      <h3>{title}</h3>
      <P>{columnDescription}</P>
      <h2>{price}</h2>
      <hr />
      <ul>{listFeatures}</ul>
    </PricingColumnStyles>
  )
}

export default PricingColumn
