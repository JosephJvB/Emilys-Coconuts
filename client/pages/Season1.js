import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

import MainNav from '../components/MainNav'
import { homeButton, backButton, signature } from '../components/dumb-components'

const stages = [ 1, 2, 3, 4 ]

const Season1 = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(MainNav),
      h(backButton, { goBack }),
      'im season1',
      h(homeButton),
      h('br'),
      stages.map(s => h('button', { key: s, className: 'button is-large' }, `Stage${s}`)),
      h('br'),
      h(signature)
    ])
  )
})

export default Season1
