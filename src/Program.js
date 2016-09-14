import React, { Component } from 'react';
import ProgramSummary from './ProgramSummary';
import ExtendedProgramSummary from './ExtendedProgramSummary';  
import Graph from './Graph'; 
export default class Program extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      hover: false,
      extend: false
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleHover () {
    this.setState({hover: !this.state.hover})
  }

  handleClick() {
    this.setState({extend: !this.state.extend})
  }

  render () {
    return (
      <div className='program'>
        <div>
          <span>
            {this.props.name}
          </span>
          <span className={this.state.hover ? 'hover' : 'edit'} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          </span>
        </div>
        <Graph />
        <ProgramSummary />
        <ExtendedProgramSummary visible={this.state.extend ? true : false}/>
        <div className="extend" onClick={this.handleClick}>
          {this.state.extend ? 'less' : 'more'}
        </div>
      </div>
    )
  }
}