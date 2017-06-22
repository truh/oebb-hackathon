// @flow

import React from 'react'
import Helmet from 'react-helmet'

import TrainMap from '../train-map'

const title = 'Map Page'

const center = { lat: 59.95, lng: 30.33 }
const zoom = 11

const containerStyle = {
  height: '100%',
}

const MapPage = () => (
  <div style={containerStyle}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page containing a map' },
        { property: 'og:title', content: title },
      ]}
    />
    <TrainMap center={center} zoom={zoom} />
  </div>
)

export default MapPage
