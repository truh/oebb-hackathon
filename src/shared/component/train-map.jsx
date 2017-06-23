import React from 'react'
import GoogleMapReact from 'google-map-react'

const mapOnChange = () => { }

const trainMarkerClassName = 'train-marker'

const TrainMarker = text => (
  <div className={trainMarkerClassName}>
    {text}
  </div>
)

const TrainMap = prop => (
  <GoogleMapReact
    onChange={mapOnChange}
    center={prop.center}
    zoom={prop.zoom}
  >
  </GoogleMapReact>
)

export default TrainMap
