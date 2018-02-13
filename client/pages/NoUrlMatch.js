import { Fragment as F } from 'react'
import h from 'react-hyperscript'

import { homeButton } from '../dumb-components'

const NoUrlMatch = () => {
  return (
    h(F, [
      'oops that URL doesnt go anywhere useful!',
      h(homeButton)
    ])
  )
}

export default NoUrlMatch
