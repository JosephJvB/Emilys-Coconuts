import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton, backButton } from '../dumb-components'

const Standings = props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(backButton, { goBack }),
      'im standings',
      h(homeButton),
      h('br'),
      'Im gonna be a lovely table :)'
    ])
  )
}

export default Standings
