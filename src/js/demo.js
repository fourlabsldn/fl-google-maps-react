import ReactDOM from 'react-dom';
import React from 'react';
import Map from 'fl-google-maps-react';


const Wrapper = () => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}>
    <Map />
  </div>
);

export default function (container) {
  ReactDOM.render((<Wrapper />), container);
}
