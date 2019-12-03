import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  Polyline,
  TrafficLayer
} from "react-google-maps";
import getIconBus from './getIconBus';


const googleMapView = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * Substitua o {} pela para funcionamento completo do mapa
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key={}&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (

  <GoogleMap defaultZoom={15} defaultCenter={{ lat: -19.9840516, lng: -43.9468411 }}>
    <TrafficLayer autoUpdate />
    {console.log(props)}
    {
      /*
        * Para inserir uma imagem é necessário colocar no formato 'Data URIs'
        * O SVG não pode conter o caractere #. Transforme o hex para rgb
      */
      <Marker
        icon={{
          url: `data:image/svg+xml;utf8,${getIconBus()}`
        }}
        position={props.positionMarker}
      />}

    <Polygon path={[
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 }
    ]} />

    <Polyline path={[
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 }
    ]} />


  </GoogleMap>
));
export default googleMapView;
