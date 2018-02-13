import { Fragment as F } from 'react'
import h from 'react-hyperscript'

import { homeButton, backButton } from '../dumb-components'

const NoUrlMatch = props => {
  const { goBack } = props.history
  return (
    h(F, [
      'oops that URL doesnt go anywhere useful!',
      h(homeButton),
      ' OR ',
      h(backButton, { goBack })
    ])
  )
}

export default NoUrlMatch
