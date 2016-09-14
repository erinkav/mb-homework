import React, { Component } from 'react';

export default class ExtendedProgramSummary extends React.Component {
  render () {
    return (
      <div className='extended-program-summary'>
        <span className="col-3">
          <p className="extended-program-summary-label">Price Name</p>
          <p className="extended-program-entry"> Monthly Unlimit...</p>
          <p className="extended-program-entry"> Single Visit</p>
          <p className="extended-program-entry"> 10 class pass</p>
          <p className="extended-program-entry"> Student Single...</p>
          <p className="extended-program-entry"> 20 class pass</p>
          <p className="extended-program-entry"> 5 class pass</p>
        </span>
        <span className="col-2">
          <p className="program-summary-label">Current</p>
          <p className="extended-program-num"> $4,260</p>
          <p className="extended-program-num"> $1,750</p>
          <p className="extended-program-num"> $560</p>
          <p className="extended-program-num"> $475</p>
          <p className="extended-program-num"> $445</p>
          <p className="extended-program-num"> $230</p>
          <p className="extended-program-num"> $520</p>
        </span>
        <span className="col-3">
          <p className="program-summary-label">1-year</p>

          <img src="../assets/spark_lines.png" />
        </span>
      </div>
    )
  }
}