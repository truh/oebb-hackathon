// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'rc-slider'

import TrainMap from '../train-map'

const title = 'Map Page'

const center = { lat: 48.2, lng: 16.2 }
const zoom = 11

const containerStyle = {
  height: '90%',
}

const sliderStyle = {
  width: 400,
  height: '10%',
}

/* eslint-disable */
const sliderMarks = {
  '1': <strong>01.11.2016</strong>,
  '6': <strong>06.11.2016</strong>,
  '12': <strong>12.11.2016</strong>,
  '18': <strong>18.11.2016</strong>,
  '24': <strong>24.11.2016</strong>,
  '30': <strong>30.11.2016</strong>,
}
/* eslint-enable */

const sliderContainerClassName = 'footer navbar-fixed-bottom'

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
    <div style={sliderStyle} className={sliderContainerClassName}>
      <Slider
        min={1}
        max={30}
        step={1}
        dots
        marks={sliderMarks}
        onAfterChange={sliderMarks}
        defaultValue={22}
      />
    </div>
  </div>
)

export default MapPage
