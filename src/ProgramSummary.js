import React, { Component } from 'react';

export default class ProgramSummary extends React.Component {
  render () {
    return (
      <div className='program-summary'>
        <span className="col-1">
          <p className="program-summary-label"> Total Monthly Sales </p>
        </span>
        <span className='col-2'>
          <p className="program-summary-label"> Current </p>
          <p className="program-summary-number"> Number Placeholder </p>
        </span>
        <span className='col-3'>
          <p  className="program-summary-label">1 year</p>
          <img src="../assets/spark_line.png" />
        </span>
      </div>
    )
  }
}