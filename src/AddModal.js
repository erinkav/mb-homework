import React, {Component} from 'react';


export default class AddModal extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      name: null
    }
    this.handleName = this.handleName.bind(this);
    this.sendProgramData = this.sendProgramData.bind(this); 
  }

  handleName (e) {
    this.setState({name: e.target.value})
  }

  sendProgramData (e) {
    console.log(this.state.name)
    this.props.handleSubmit(this.state.name)
    e.preventDefault(); 
  }

  render () {

    return (
      <div className={`${this.props.visible ? 'show-modal' : 'hide-modal'}`}>
        <form>
          <select className='form-element dropdown'>
            <option>Count Series</option>
            <option>Time Series</option>
            <option>Membership</option>
          </select>
          <input className='form-element input' type="text" placeholder="Program name" onChange={this.handleName} />
          <label className='form-element'>Allow Online Scheduling?</label>
          <label>Yes</label>
          <input className='form-element' type="radio" name="onlineSchedule" value="Yes" />
          <label>No</label>
          <input className='form-element' type="radio" name="onlineSchedule" value="No" />
          <label> Default capacity: 
            <input className='form-element' type="text" placeholder="Default capacity" />
          </label>
          <label>Classes<input className='form-element' type="checkbox" /></label>
          <label>Appointments<input className='form-element' type="checkbox" /></label>
          <label>Workshops<input className='form-element' type="checkbox" /></label>
          <label>Outside<input className='form-element' type="checkbox" /></label>
          <label>Inside<input className='form-element' type="checkbox" /></label>
          <label>Gym<input className='form-element' type="checkbox" /></label>
          <button className='form-element submit-program' type="submit" onClick={this.sendProgramData} > Submit </button>
        </form>
      </div>
    )
  }
}