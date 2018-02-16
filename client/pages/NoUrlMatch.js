import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

import { homeButton, backButton, signature } from '../components/dumb-components'

const NoUrlMatch = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      'oops that URL doesnt go anywhere useful!',
      h(homeButton),
      ' OR ',
      h(backButton, { goBack }),
      h(signature)
    ])
  )
})

export default NoUrlMatch
