import React, { Component } from 'react';

class Player extends Component {
  state = {
    name: "Jordan"
  }

  alertName = () => {
    alert(this.state.name)
  }

  render() {
    return(
      <div>
        <span onClick={this.alertName}>{this.state.name}</span>
      </div>
    )
  };
}

export default Player;
