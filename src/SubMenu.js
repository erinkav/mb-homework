import React, {Component} from 'react'


export default class SubMenu extends React.Component {
  render () {
    return (
      <div className="sub-menu">
        <span className='sub-menu-options'>
          Dashboard
        </span>
        <span className='sub-menu-options sub-menu-selected'>
          Business Overview
        </span>
        <span className='sub-menu-options'>
          Schedule
        </span>
        <span className='sub-menu-options'>
          Reports
        </span>
      </div>
    )
  }
}