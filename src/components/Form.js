import React from "react"
import styled from "styled-components"

const FormStyles = styled.form`
  padding: var(--base-size);
  text-align: center;

  h1 {
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

class Form extends React.Component {
  state = { userInput: "" }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      userInput: value,
    })
  }

  onHandleSubmit = () => {
    this.setState({
      userInput: "",
    })
  }

  render() {
    return (
      <FormStyles onSubmit={this.onHandleSubmit}>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          placeholder={this.props.placeholder}
          name="email"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <button type="submit" className={this.props.bgColor}>
          {this.props.buttonText}
        </button>
      </FormStyles>
    )
  }
}

export default Form
