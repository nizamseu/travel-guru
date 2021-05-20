import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 23.6850,
  lng: 90.3563
};

const sundarban={
  lat: 21.9497,
  lng: 89.1833
}

const coxsBazar={
  lat: 21.4272,
  lng: 92.0058 
}

const srimangal ={
  lat: 24.3065,
  lng: 91.7296 
}

function Google_Map({bookingData}) {
  console.log("from Hotel",bookingData);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBO6cAjRPR9pPTGwetA0cTzGjP34stxEW0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={bookingData}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
        position={bookingData}
        draggable={true}
       
        ></Marker>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Google_Map)