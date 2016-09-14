import React, { Component } from 'react';
import ProgramSummary from './ProgramSummary';
import ExtendedProgramSummary from './ExtendedProgramSummary';  
import Graph from './Graph'; 
export default class Program extends React.Component {

  hoverHandler (e) {

  }

  render () {
    return (
      <div className='program'>
        <div>
          <span>
            {this.props.name}
          </span>
          <span>
            <img className="edit" src="../assets/pencil_icons.png" />
          </span>
        </div>
        <Graph />
        <ProgramSummary />
        <ExtendedProgramSummary />
        <div className="extend">
          more
        </div>
      </div>
    )
  }
}