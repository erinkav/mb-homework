import React, { Component } from 'react';

export default class ProgramListEntry extends React.Component {
  render () {
    return (
      <div className='program-list-entry'>
          <span>
            {this.props.name}
          </span>
          <span>
            {this.props.sales}
          </span>
          <span>            
            {this.props.visits} visits
          </span>
      </div>
    )
  }
}