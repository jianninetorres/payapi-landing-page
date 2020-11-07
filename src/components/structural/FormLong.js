import React, { Component } from "react"
import Input from "./Input"

class FormLong extends Component {
  render() {
    return (
      <form method="post" action="#">
        <label>
          Name
          <Input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <Input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <Input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    )
  }
}

export default FormLong
