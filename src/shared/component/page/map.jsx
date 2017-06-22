// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Map Page'

const HelloPage = () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page containing a map' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
      </div>
    </div>
  </div>
)

export default HelloPage
