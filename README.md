# React Wrapper for Google Maps

Based on this tutorial: [How to Write a Google Maps React Component](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)

We wrote our own version because you just couldn't use Ari Lerner's version with AMD.

# Usage
Use it like this:

``` javascript
import ReactDOM from 'react-dom';
import React from 'react';
import { Map, Marker, InfoWindow } from 'fl-google-maps-react';

class MyComponent extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  // Will open an info window on top of the clicked marker
  onMarkerClick(marker) {
    this.setState({
      selectedPlace: 'Info window content text',
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }


  render() {
    const props = this.props;
    return (
      // MyComponent must have set dimensions
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
  ReactDOM.render((<MyComponent google={google} />), container);
}

```
