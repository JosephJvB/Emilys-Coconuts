import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles/index'

import MainNav from '../components/MainNav'
import { signature } from '../components/dumb-components'

const Standings = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(MainNav, { goBack }),
      'im standings',
      h('br'),
      'Im gonna be a lovely table :)',
      h(signature)
    ])
  )
})

export default Standings
