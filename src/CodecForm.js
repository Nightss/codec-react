import React, { Component } from 'react'
import './App.css'

class CodecForm extends Component {
  state = {
    message: "",
    key: ""
  };

  handleMessageChange = (e) => {
    this.setState({message: e.target.value})
  };

  handleKeyChange = (e) => {
    this.setState({key: e.target.value})
  };

  render(){
    return(
      <form>
        <div className="codec-row">
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
            <input type="submit" value="Encoded Message"/>
          </div>
        </div>
      </form>
    );
  }
}
export default CodecForm;
