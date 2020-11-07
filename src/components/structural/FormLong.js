import React, { Component } from "react"
import styled from "styled-components"

const FormLongStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label:not([for="checkbox"]) {
    // hide label visually but keep them available to screen reader and other assistive technology
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  input:not([type="reset"]),
  textarea {
    background-color: var(--page-grey);
    border: none;
    border-bottom: 1px solid var(--blue-grey);
    margin: var(--base-size) 0;
    padding: var(--base-size);
  }

  .checkbox-container {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    margin-right: calc(var(--base-size) / 2);
  }
`

class FormLong extends Component {
  state = { name: "", email: "", subject: "", message: "" }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value,
    })
  }

  render() {
    return (
      <FormLongStyles method="post" action="#">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={this.state.subject}
          onChange={this.handleInputChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <div className="checkbox-container">
          <input type="checkbox" name="checkbox" />
          <label htmlFor="checkbox">
            Stay up-to-date with company announcements and updates to our API
          </label>
        </div>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </FormLongStyles>
    )
  }
}

export default FormLong
