import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

import MainNav from '../components/MainNav'
import { homeButton, backButton, signature } from '../components/dumb-components'

const Divisions = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(MainNav),
      h(backButton, { goBack }),
      'im divisions',
      h(homeButton),
      h(signature)
    ])
  )
})

export default Divisions
