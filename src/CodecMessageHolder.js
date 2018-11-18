import React from 'react'
import './App.css'

const CodecMessageHolder = ({ codecMessage}) => {
  return (
    <div className="codec-row">
      <div className="codec-col-12">
        Your Encrypted Word is: <span>{codecMessage}</span>
      </div>
    </div>
  );
}

export default CodecMessageHolder
