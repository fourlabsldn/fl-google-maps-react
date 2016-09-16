import React from 'react';
import ReactDOM from 'react-dom';

const defaultCenter = {
  lat: 51.496672,
  lng: -0.175175,
};

export default class Map extends React.Component {
  constructor({ google }) {
    super();
    this.state = {
      google,
      map: null,
    };
  }

  componentDidMount() {
    const mapContainer = ReactDOM.findDOMNode(this);
    this.createMap(this.props.google, this.props.options, mapContainer);
  }

  // Actually constructs the map
  createMap(google, userOptions = {}, mapContainer) {
    const defaultOptions = {
      center: defaultCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 14,
      scrollwheel: false,
      maxZoom: 17,
    };
    const options = Object.assign({}, defaultOptions, userOptions);

    // Create map
    const map = new google.maps.Map(mapContainer, options);
    this.setState({ map });
  }

  // Creates markers
  renderChildren() {
    const { children } = this.props;
    if (!children) {
      return null;
    }

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.state.map,
        google: this.props.google,
      });
    });
  }

  render() {
    const style = { width: '100%', height: '100%' };
    return (
      <div style={style}>
        {this.renderChildren()}
      </div>
    );
  }
}


Map.propTypes = {
  google: React.PropTypes.object.isRequired,
  options: React.PropTypes.object,
};
