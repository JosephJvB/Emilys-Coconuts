import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton } from '../dumb-components'

const Divisions = () => {
  return (
    h(F, [
      'im divisions',
      h(homeButton)
    ])
  )
}

export default Divisions
