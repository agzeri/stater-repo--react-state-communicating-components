import React, { Component } from 'react';

class Filters extends Component {
  handleFilterChange = () => {
    const value = this.refs.filterInput.value;
    this.props.updateFilter(value);
    // console.log(value);
  }

  render() {
    return <input placeholder="Search..." className="search__input" type="text" ref="filterInput" onChange={this.handleFilterChange} />
  }
}

export default Filters;
