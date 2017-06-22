// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Slider, { Range } from 'rc-slider'

import { isServer } from '../../util'
import Message from '../../container/message'
import HelloButton from '../../container/hello-button'

if (!isServer) {
  // eslint-disable-next-line
  require('rc-slider/assets/index.css')
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
        <Slider />
        <Range />
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>
)

export default HelloPage
