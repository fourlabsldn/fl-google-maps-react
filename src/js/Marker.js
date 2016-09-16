import React from 'react';

export default class Marker extends React.Component {

  componentDidUpdate(prevProps) {
    console.log('Maps', this.props.map, prevProps.map);
    const mapChanged = this.props.map !== prevProps.map;
    const positionChanged = this.props.pos !== prevProps.position;

    if (mapChanged || positionChanged) {
      const { map, google, pos, listeners } = this.props;
      this.renderMarker(map, google, pos, listeners);
    }
  }

  // Destroy marker
  componentWillUnmount() {
    this.destroyMarker();
  }

  destroyMarker() {
    if (this.marker) { this.marker.setMap(null); }
  }

  renderMarker(map, google, pos, listeners = {}) {
    const position = new google.maps.LatLng(pos.lat, pos.lng);
    const pref = { map, position };
    this.marker = new google.maps.Marker(pref);

    Object.keys(listeners).forEach(l => {
      this.marker.addListener(l, listeners[l]);
    });
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  pos: React.PropTypes.object.isRequired,
  map: React.PropTypes.object,
  google: React.PropTypes.object.isRequired,
  listeners: React.PropTypes.object,
};
