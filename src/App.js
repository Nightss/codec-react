
import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import CodecForm from './CodecForm'
import CodecMessageHolder from './CodecMessageHolder'

class App extends Component {
  state = {
    codecMessage: "TestMessage"
  }

  alphabet = "abcdefghijklmnopqrstuvwxyz"

  performCodec = (message,key) => {
    let codec_message = ""
    for (let char of message) {
      let position = this.alphabet.indexOf(char.toLowerCase())
      let codec_key
      let strong
      if (position !== -1) {
        strong = char === char.toUpperCase() ? true : false
        if (position + parseInt(key) > 25) {
          codec_key = position + parseInt(key) - this.alphabet.length
        } else {
          codec_key = position + parseInt(key)
        };
        let codec_char = this.alphabet[codec_key]
        console.log(char, codec_char, codec_key)
        codec_message += strong === true ? codec_char.toUpperCase() : codec_char.toLowerCase()
      } else {
        codec_message += char
      };
    }
    this.setState({codecMessage: codec_message })
  };


  render() {
    return (
      <div id="codec-main">
        <div className="codec-row">
          <div className="codec-col-2"></div>
          <div className="codec-col-8">
            <h2>Codec App</h2>
            <CodecForm performCodec={this.performCodec} />
            <CodecMessageHolder codecMessage={this.state.codecMessage} />
          </div>
          <div className="codec-col-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
