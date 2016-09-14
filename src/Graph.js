import React, { Component } from 'react';

export default class Graph extends React.Component {
  render () {
    return (
      <div className='graph'>
        <p className='graph-label'> Sales by Month </p>
        <img src="../assets/graph.png" />
      </div>
    )
  }
}