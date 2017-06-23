import React from 'react'
import Helmet from 'react-helmet'

import Slider from 'rc-slider'

import { isServer } from '../../util'
import Message from '../../container/message'
import HelloButton from '../../container/hello-button'

if (!isServer) {
  // eslint-disable-next-line
  require('rc-slider/assets/index.css')
}

const style = { width: 400, margin: 50 }
const marks = {
  1: <strong>01.11.2016</strong>,
  6: <strong>06.11.2016</strong>,
  12: <strong>12.11.2016</strong>,
  18: <strong>18.11.2016</strong>,
  24: <strong>24.11.2016</strong>,
  30: <strong>30.11.2016</strong>,
}

function log(value) {
  console.log(value); //eslint-disable-line
}

const title = 'Hello Page'

const HelloPage = () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <div style={style}>
          <p>Slider</p>
          <Slider
            min={1}
            max={30}
            step={1}
            dots
            marks={marks}
            onAfterChange={log}
            defaultValue={22}
          />
        </div>
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>
)

export default HelloPage
