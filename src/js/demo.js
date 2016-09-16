import ReactDOM from 'react-dom';
import React from 'react';
import { Map, Marker } from 'fl-google-maps-react';


const Wrapper = props => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}>
    <Map google={props.google} >
      <Marker
        google={props.google}
        pos={{lat: 51.496322, lng: -0.178736 }}
      />
    </Map>
  </div>
);

export default function (container, google) {
  ReactDOM.render((<Wrapper google={google} />), container);
}
