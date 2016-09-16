/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom';
import React from 'react';
import { Map, Marker } from 'fl-google-maps-react';


const Wrapper = props => (
  // Wrapper must have set dimensions
  <div style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}>
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

    </Map>
  </div>
);

export default function (container, google) {
  ReactDOM.render((<Wrapper google={google} />), container);
}
