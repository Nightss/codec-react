import React from 'react'
import './App.css'

const CodecMessageHolder = (props) => {
  return (
    <div className="codec-row">
      <div className="codec-col-12">
        Your Encrypted Word is: <span>{props.codecMessage}</span>
      </div>
    </div>
  );
}

export default CodecMessageHolder
