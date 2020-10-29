import React from "react"
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

  input,
  button {
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
          />
          <button type="submit" className={this.props.bgColor}>
            {this.props.buttonText}
          </button>
        </div>
      </FormStyles>
    )
  }
}

Form.defaultProps = {
  title: "",
}

export default Form
