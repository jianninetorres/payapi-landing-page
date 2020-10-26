import React from "react"

import styled from "styled-components"

const ButtonStyles = styled.button`
  border: 2px solid white;
  border-radius: calc(var(--base-size) * 2);
  color: white;
  padding: var(--base-size);

  &.blue-black {
    background-color: var(--blue-black);
  }
`

const Button = ({ type, text, bgColor }) => {
  return (
    <ButtonStyles type={type} className={bgColor}>
      {text}
    </ButtonStyles>
  )
}

export default Button
