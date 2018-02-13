import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div id="body">
      <div>Welcome, jane.smith</div>
        <label>
          I wish to report:
          <select>
            <option>short staffing</option>
            <option>missed teaching</option>
          </select>
        </label>
        <label>
          Location:
          <select>
            <option>Current Location (12'34", 89'67")</option>
            <option>St. Thomas' Hopsital</option>
            <option>Waterloo Infirmary</option>
          </select>
        </label>
        <textarea></textarea>
        <button>Cancel</button>
        <button>Report</button>
      </div>
    )
  }
}

module.exports = Header
