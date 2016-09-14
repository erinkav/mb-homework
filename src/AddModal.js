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
          <select>
            <option>Count Series</option>
            <option>Time Series</option>
            <option>Membership</option>
          </select>
          <input type="text" placeholder="Program name" onChange={this.handleName} />
          <label>Allow Online Scheduling?</label>
          <label>Yes</label>
          <input type="radio" name="onlineSchedule" value="Yes" />
          <label>No</label>
          <input type="radio" name="onlineSchedule" value="No" />
          <label> Default capacity: 
            <input type="text" placeholder="Default capacity" />
          </label>
          <label>Classes<input type="checkbox" /></label>
          <label>Appointments<input type="checkbox" /></label>
          <label>Workshops<input type="checkbox" /></label>
          <label>Outside<input type="checkbox" /></label>
          <label>Inside<input type="checkbox" /></label>
          <label>Gym<input type="checkbox" /></label>
          <button type="submit" onClick={this.sendProgramData} > Submit </button>
        </form>
      </div>
    )
  }
}