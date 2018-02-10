import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div id="body">
        <label>
          I wish to report:
          <select>
            <option>short staffing</option>
            <option>missed teaching</option>
          </select>
        </label>
      </div>
    )
  }
}

module.exports = Header
