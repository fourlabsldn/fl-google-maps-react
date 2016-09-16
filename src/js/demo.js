/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom';
import React from 'react';
import { Map, Marker } from 'fl-google-maps-react';

const markersPositions = [
  { lat: 51.497433, lng: -0.179737 },
  { lat: 51.498544, lng: -0.177738 },
  { lat: 51.499655, lng: -0.176739 },
];

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = { markersPos: markersPositions };

    this.changeMarkersPositions = this.changeMarkersPositions.bind(this);
    this.render = this.render.bind(this);
  }

  changeMarkersPositions() {
    const poss = this.state.markersPos.map(p => ({ lat: p.lat, lng: p.lng + 0.010000 }));
    this.setState({ markersPos: poss });
  }


  render() {
    const props = this.props;
    return (
      // Wrapper must have set dimensions
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}
        onClick={this.changeMarkersPositions}
      >
        <Map google={props.google} >

          <Marker
            google={props.google}
            pos={{ lat: 51.496322, lng: -0.178736 }}
            listeners={{
              // See listeners at https://developers.google.com/maps/documentation/javascript/events
              click: () => console.log('Clicked!'),
              mouseover: () => console.log('Mouseovered!'),
            }}
          />

          {this.state.markersPos.map((p, idx) => (
            <Marker
              key={idx}
              google={props.google}
              pos={p}
              listeners={{
                // See listeners at https://developers.google.com/maps/documentation/javascript/events
                click: () => console.log(`Clicked ${idx}!`),
                mouseover: () => console.log(`Mouse over ${idx}!`),
              }}
            />
          ))}

        </Map>
      </div>
    );
  }
}

export default function (container, google) {
  ReactDOM.render((<Wrapper google={google} />), container);
}
