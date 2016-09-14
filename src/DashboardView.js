import React, {Component} from 'react';
import Program from './Program'; 
import ProgramList from './ProgramList'; 
import AddModal from './AddModal'; 

export default class DashboardView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      classes: ['Yoga Classes', 'Yoga Privates', 'Yoga Duets'],
      visible: false
    }; 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showModal = this.showModal.bind(this)

  }

  handleSubmit (name) {
    const allClasses = this.state.classes; 
    allClasses.push(name);
    this.setState({classes: allClasses})
    this.showModal()
  }

  showModal () {
    const currVisibility = this.state.visible
    this.setState({visible: !currVisibility})
  }

  render () {
    
    return (
      <div className="dashboard">

        <div className='programs-dashboard'>
          <div className='left-dashboard'>
            <button className='button' onClick={this.showModal} />
          </div>
          <div className='right-dashboard'> 
            {this.state.classes.map((name, index) => {
              return <Program name={name} key={index} />
            })}
          </div>
        </div>
        <ProgramList />
        <AddModal visible={this.state.visible} handleSubmit={this.handleSubmit} />

      </div>
    )
  }
}