import React, { Component } from 'react';

import Filters from './Filters';
import List from './List';
import MatchedResults from './MatchedResults';

class ListContainer extends Component {
  constructor() {
    super();

    this.state = {
      listItems: [
        'Chicago',
        'New York',
        'Tokyo',
        'London',
        'San Francisco',
        'Amsterdan',
        'Hong Kong'
      ],
      nameFilter: ''
    }
  }

  _handleFilterUpdate = (filter) => {
    this.setState({
      nameFilter: filter
    })
  }

  render() {
    let displayedItems = this.state.listItems.filter(item => {
      return item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) !== -1;
    })

    return (
      <div>
        <Filters updateFilter={this._handleFilterUpdate} />
        <List items={displayedItems} />
        <MatchedResults number={displayedItems.length} />
      </div>
    );
  }
}

export default ListContainer;
