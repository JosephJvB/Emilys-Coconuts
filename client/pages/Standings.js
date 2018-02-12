import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton } from '../dumb-components'

const Standings = () => {
  return (
    h(F, [
      'im standings',
      h('br'),
      'Im gonna be a lovely table :)',
      homeButton()
    ])
  )
}

export default Standings
