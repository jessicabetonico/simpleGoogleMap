import React, {Component} from 'react';
import GoogleMapsView from '../../components/google-maps';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -19.9840516,
      lng: -43.9468411,      
    };
  }
  componentDidMount () {
    setInterval(this.positionUpdate, 5000);
  }

  positionUpdate = () => {
    let {lat, lng} = this.state;
    lat = lat + 0.01;
    lng = lng + 0.01
    this.setState({
      lat, lng
    })
  }
  render () {
    const {lat, lng} = this.state;
    return(
      <>
        <GoogleMapsView positionMarker={{ lat: lat, lng: lng }} />      
      </>
    );
  }
}

export default MapView;