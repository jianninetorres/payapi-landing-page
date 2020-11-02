import React from "react"

import styled from "styled-components"

const ImageStyles = styled.img`
  width: 100%;
  height: 100%;
`

const Image = ({ image, alt }) => {
  return <ImageStyles src={image} alt={alt} />
}

export default Image
