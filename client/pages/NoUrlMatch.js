import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { connect as connectFela } from 'react-fela'

import styles from '../styles/home'

import { signature } from '../components/dumb-components'
import MainNav from '../components/MainNav'

const NoUrlMatch = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(MainNav, { goBack }),
      'oops that URL doesnt go anywhere useful!',
      h(signature)
    ])
  )
})

export default NoUrlMatch
