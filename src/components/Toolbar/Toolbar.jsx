import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <div>
        {this.props.filters.map((item) => {
          return <button className='button' onClick={() => this.props.onSelectFilter(item)}>{item}</button>
        })}
      </div>
    )
  }
}