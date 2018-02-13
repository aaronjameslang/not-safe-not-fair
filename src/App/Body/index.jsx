import React from 'react'
import Button from 'muicss/lib/react/button';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

class Header extends React.Component {
  render () {
    return (
      <div id="body">
      <div>Welcome, jane.smith</div>
        <Select label="Location:">
          <Option label="short staffing" />
          <Option label="missed teaching" />
        </Select>
        <Select label="I wish to report:">
          <Option label="Current Location (12'34'' 89'67'')" />
          <Option label="St. Thomas' Hospital" />
          <Option label="Waterloo Infiramry" />
        </Select>
        <textarea></textarea>
        <Button variant="raised" color="primary">Cancel</Button>
        <Button variant="raised" color="primary">Report</Button>
      </div>
    )
  }
}

module.exports = Header
