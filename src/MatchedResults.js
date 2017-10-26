import React, { Component } from 'react';

class MatchedResults extends Component {
  render() {
    let bgColor = '#4a53bf'
    const containerStyles = {
      position: 'fixed',
      top: '0',
      right: '0',
      background: bgColor,
      padding: '20px',
      color: 'white'
    }

    if (this.props.number < 5) containerStyles.background = 'black'
    if (this.props.number === 1) containerStyles.background = 'green'

    const buttonStyles = {
      color: '#eaba82',
      border: '2px solid #eaba82',
      padding: '5px',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'inline-block',
      marginLeft: '5px'
    }


    return (
      <div style={containerStyles}>
        <strong>Matching Results</strong>
        <span style={buttonStyles}>{this.props.number}</span>
      </div>
    )
  }
}

export default MatchedResults;
