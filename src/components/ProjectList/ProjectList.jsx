import React from 'react';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='projects'>
        {this.props.projects.map((item, index) => {
          return <img key={index + item.img} className='img' src={item.img} alt={item.category} />
        })}
      </div>
    )
  }
}