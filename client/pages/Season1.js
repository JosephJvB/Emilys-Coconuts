import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton, backButton } from '../dumb-components'

const stages = [ 1, 2, 3, 4 ]

const Season1 = props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(backButton, { goBack }),
      'im season1',
      h(homeButton),
      h('br'),
      stages.map(s => h('button', { key: s, className: 'button is-large' }, `Stage${s}`)),
      h('br')
    ])
  )
}

export default Season1
