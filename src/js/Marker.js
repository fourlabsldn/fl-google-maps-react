import React from 'react';

export default class Marker extends React.Component {

  componentDidUpdate(prevProps) {
    const mapChanged = this.props.map !== prevProps.map;
    const positionChanged = this.props.pos !== prevProps.pos;

    if (mapChanged || positionChanged) {
      const { map, google, pos } = this.props;
      this.destroyMarker();
      this.renderMarker(map, google, pos);
    }
  }

  // Destroy marker
  componentWillUnmount() {
    console.log('To be destroyed');
    this.destroyMarker();
  }

  destroyMarker() {
    if (this.marker) { this.marker.setMap(null); }
  }

  renderMarker(map, google, pos) {
    const position = new google.maps.LatLng(pos.lat, pos.lng);
    const pref = { map, position };
    this.marker = new google.maps.Marker(pref);

    const clickListener = this.props.onClick || function () {};
    this.marker.addListener('click', () => clickListener(this.marker));
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  pos: React.PropTypes.object.isRequired,
  map: React.PropTypes.object,
  google: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
};
