import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton, backButton } from '../dumb-components'

const Divisions = props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(backButton, { goBack }),
      'im divisions',
      h(homeButton)
    ])
  )
}

export default Divisions
