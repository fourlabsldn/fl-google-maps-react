import React from 'react';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null,
    };
  }

  render() {
    return (
      <div> Test-me</div>
    );
  }
}


Map.propTypes = {
  google: React.PropTypes.object,
};
