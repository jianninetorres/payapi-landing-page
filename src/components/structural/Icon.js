import React from "react"

import styled from "styled-components"

const IconStyles = styled.img`
  width: auto;
`

const Icon = ({ image, alt }) => {
  return <IconStyles src={image} alt={alt} />
}

export default Icon
