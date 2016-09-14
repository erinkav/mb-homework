import React, { Component } from 'react';
import SubMenu from './SubMenu'; 

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <span className='logo'>
           <img src='../assets/logo.png' />
          </span>
          <span className='tab-menu'>
            <span className='tab selected-tab'>
              Dashboard
            </span>
            <span className='tab'>
              Sign In
            </span>
            <span className='tab'>
              Classes
            </span>
            <span className='tab'>
              Workshops
            </span>
            <span className='tab'>
              Appointments
            </span>
            <span className='tab'>
              Client Home
            </span>
            <span className='tab'>
              Retail
            </span>
          </span>
        </div>
        <SubMenu />
      </div>

    )
  }
}