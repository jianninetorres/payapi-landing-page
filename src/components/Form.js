import React from "react"
import styled from "styled-components"

const FormStyles = styled.form`
  padding: var(--base-size);
  text-align: center;

  h1 {
    font-size: calc(var(--base-size) * 2);
    margin-bottom: calc(var(--base-size) / 2);
  }

  input,
  button {
    border: none;
    margin: calc(var(--base-size) / 2) 0;
    height: calc(var(--base-size) * 4);
    border-radius: calc(var(--base-size) * 2);
    width: 100%;
    max-width: 600px;
    padding: 0 var(--base-size);
  }

  button.hot-pink {
    background-color: var(--hot-pink);
    color: var(--white);
  }
`

const Form = ({ title, placeholder, buttonText, bgColor }) => {
  return (
    <FormStyles>
      <h1>{title}</h1>
      <input type="text" placeholder={placeholder} value="" />
      <button type="button" class={bgColor}>
        {buttonText}
      </button>
    </FormStyles>
  )
}

export default Form
