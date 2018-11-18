import React, { Component } from 'react'
import './App.css'

class CodecForm extends Component {
  state = {
    message: "",
    key: "",
    error: "",
    disabled: true
  };

  handleMessageChange = (e) => {
    this.setState({message: e.target.value})
  };

  handleKeyChange = (e) => {
    let key = e.target.value
    if (parseInt(key) && parseInt(key) >= 0 && parseInt(key) <= 25 ) {
      this.setState({
        key: key,
        error: "",
        disabled: false
      })
    } else {
      this.setState({
        key: key,
        error: "Error: You must enter a number between 0 and 25",
        disabled: true
      })
    }
  };

  handleCodecSubmit = (e) => {
    e.preventDefault()
    this.props.performCodec(this.state.message,this.state.key)
  }
  render(){
    return(
      <form onSubmit={this.handleCodecSubmit}>
        <div className="codec-row">
          <div className="codec-col-12">
            <h2>{this.state.error}</h2>
          </div>
          <div className="codec-col-6">
            <input
              type="text"
              value={this.state.message}
              placeholder="Enter Message"
              onChange={this.handleMessageChange}
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
