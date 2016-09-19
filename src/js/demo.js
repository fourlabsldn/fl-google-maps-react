/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom';
import React from 'react';
import { Map, Marker, InfoWindow } from 'fl-google-maps-react';

const markersSkeleton = [
  { lat: 51.497433, lng: -0.179737, placeName: 'Place no 1' },
  { lat: 51.498544, lng: -0.177738, placeName: 'Place no 2' },
  { lat: 51.499655, lng: -0.176739, placeName: 'Place no 3' },
]

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = { markersPos: markersSkeleton };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.render = this.render.bind(this);
  }

  onMarkerClick(marker) {
    console.log('Clicked:', marker);
    this.setState({
      selectedPlace: 'Anything',
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }


  render() {
    const props = this.props;
    return (
      // Wrapper must have set dimensions
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}
      >
        <Map google={props.google} >

          <Marker
            onClick={this.onMarkerClick}
            google={props.google}
            pos={{ lat: 51.496322, lng: -0.178736 }}
            icon="http://res.cloudinary.com/golden-eagle/image/upload/v1473755159/g4172_lefldr.png"
          />

          {this.state.markersPos.map((p, idx) => (
            <Marker
              key={idx}
              google={props.google}
              pos={p}
              onClick={this.onMarkerClick}
            />
          ))}


          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace}</h1>
              </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default function (container, google) {
  ReactDOM.render((<Wrapper google={google} />), container);
}
