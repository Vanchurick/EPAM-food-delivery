import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

/* eslint-disable */

const GoogleMap = ({ google }) => (
  <Map
    google={google}
    zoom={12}
    style={mapStyles}
    initialCenter={{ lat: 50.4314045, lng: 30.4868085 }}
  >
    <Marker position={{ lat: 50.4314045, lng: 30.4868085 }} />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSTKMVA3edG2DOBWAR-nff1yhzbP-UDE4',
})(GoogleMap);
