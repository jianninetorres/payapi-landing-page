import React from "react"

import styled from "styled-components"

const ButtonStyles = styled.button`
  border-radius: calc(var(--base-size) * 2);
  margin: calc(var(--base-size) / 2) 0;
  height: calc(var(--base-size) * 4);
  color: white;
  padding: 0 calc(var(--base-size) * 2);
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
  }

  &.blue-black {
    border: 2px solid var(--white);
    background-color: var(--transparent);
    &:hover {
      background-color: white;
      color: var(--blue-black);
    }
  }

  &.hot-pink {
    border: 2px solid var(--hot-pink);
    background-color: var(--hot-pink);
    color: var(--white);

    &:hover {
      background-color: var(--blue-grey);
      border: 2px solid var(--blue-grey);
    }
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
