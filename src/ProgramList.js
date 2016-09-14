import React, { Component } from 'react';
import ProgramListEntry from './ProgramListEntry';

export default class ProgramList extends React.Component {
  render () {
    const programList = [{
      name: 'Open Practice',
      sales: "$572.00",
      visits: "276"
    }, {
      name: 'Yoga Videos',
      sales: "$391.32",
      visits: "82"
    }]
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
        <br/>
        {programList.map((program) => {
          return <ProgramListEntry name={program.name} sales={program.sales} visits={program.visits}/>
        })
        }
      </div>
    )
  }
}