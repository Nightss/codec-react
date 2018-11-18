import React, { Component } from 'react'
import './App.css'


class CodecForm extends Component {
  state = {
    key: "",
    error: "",
    disabled: true
  };

  messageInput = React.createRef();

  handleKeyChange = (e) => {
    let key = parseInt(e.target.value)
    if (key && key >= 0 && key <= 25 ) {
      this.setState({
        key: e.target.value,
        error: "",
        disabled: false
      })
    } else {
      this.setState({
        key: e.target.value,
        error: "Error: You must enter a number between 0 and 25",
        disabled: true
      })
    }
  };

  handleCodecSubmit = (e) => {
    e.preventDefault()
    this.props.performCodec(this.messageInput.current.value,this.state.key)
  }

  render(){
    return(
      <form onSubmit={this.handleCodecSubmit}>
        <div className="codec-row">
          <div className="codec-col-12">
            <span>{this.state.error}</span>
          </div>
          <div className="codec-col-6">
            <input
              type="text"
              ref={this.messageInput}
              placeholder="Enter Message"
            />
          </div>
          <div className="codec-col-6">
            <input
              type="text"
              value={this.state.key}
              placeholder="Enter Key between 1-25"
              onChange={this.handleKeyChange}
            />
          </div>
        </div>
        <div className="codec-row">
          <div className="codec-col-12">
            <input
              type="submit"
              value="Encoded Message"
              disabled={this.state.disabled}
            />
          </div>
        </div>
      </form>
    );
  }
}
export default CodecForm;
