import React, { Component } from 'react';

export default class ProgramList extends React.Component {
  render () {
    return (
      <div className='program-list'>
        <div className="program-list-headers">
          <span>
            All Programs
          </span>
          <span>
            Monthly Sales
          </span>
          <span>
            Monthly Attendance
          </span>
        </div>
      </div>
    )
  }
}