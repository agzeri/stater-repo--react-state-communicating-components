import React, { Component } from 'react';

import MatchedResults from './MatchedResults';

class List extends Component {
  render() {
    const items = this.props.items;
    let filteredItems;

    if (items.length > 0) {
      filteredItems = items.map(item => <li>{item}</li>);
    } else {
      filteredItems = <p>No items matching this filter.</p>
    }

    return (
      <div className='results'>
        <h4 className="results__title">Results</h4>
        <ul className="items">
          {filteredItems}
        </ul>
      </div>
    )
  }
}

export default List;
