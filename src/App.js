
import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import CodecForm from './CodecForm'
import CodecMessageHolder from './CodecMessageHolder'

class App extends Component {
  state = {
    codecMessage: "TestMessage"
  }
  
  render() {
    return (
      <div id="codec-main">
        <div className="codec-row">
          <div className="codec-col-2"></div>
          <div className="codec-col-8">
            <h2>Codec App</h2>
            <CodecForm />
            <CodecMessageHolder codecMessage={this.state.codecMessage} />
          </div>
          <div className="codec-col-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
