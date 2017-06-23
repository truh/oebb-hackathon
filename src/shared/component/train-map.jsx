import React from 'react'
import GoogleMapReact from 'google-map-react'

const mapOnChange = () => { }

const TrainMap = prop => (
  <GoogleMapReact
    onChange={mapOnChange}
    center={prop.center}
    zoom={prop.zoom}
  />
)

export default TrainMap
