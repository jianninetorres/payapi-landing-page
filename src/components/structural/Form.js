import React from "react"
import Button from "./Button"
import styled from "styled-components"

const FormStyles = styled.form`
  width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }
  text-align: center;

  h1 {
    margin-bottom: calc(var(--base-size) / 2);
  }

  div {
    @media screen and (min-width: 1024px) {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  input {
    border: none;
    margin: calc(var(--base-size) / 2) 0;
    height: calc(var(--base-size) * 4);
    border-radius: calc(var(--base-size) * 2);
    width: 100%;
    max-width: 600px;
    padding: 0 calc(var(--base-size) * 2);
  }

  button {
    @media screen and (min-width: 1024px) {
      position: absolute;
      right: 0;
      max-width: 200px;
    }
  }

  .error {
    color: var(--hot-pink);
  }
`

class Form extends React.Component {
  state = { userInput: "", email: "", error: "" }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      userInput: value,
    })
  }

  onHandleSubmit = event => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.userInput)
    if (this.state.userInput !== "") {
      emailRegex
        ? this.setState({
            email: this.state.userInput,
            userInput: "",
            error: "",
          })
        : this.setState({
            error: "Please enter a valid email address.",
          })
    }
  }

  showFormTitle = () => {
    return this.props.title !== "" ? <h1>{this.props.title}</h1> : null
  }

  render() {
    return (
      <FormStyles onSubmit={this.onHandleSubmit}>
        {this.showFormTitle()}
        <div>
          <input
            type="text"
            placeholder={this.props.placeholder}
            name="email"
            value={this.state.userInput}
            onChange={this.handleInputChange}
            required
          />
          <Button
            type="submit"
            text={this.props.buttonText}
            bgColor={this.props.bgColor}
          />
        </div>
        {this.state.error && <div class="error">{this.state.error}</div>}
      </FormStyles>
    )
  }
}

Form.defaultProps = {
  title: "",
}

export default Form
