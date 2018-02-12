import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton } from '../dumb-components'

const SingleTeam = props => {
  // console.log(props)
  return (
    h(F, [
      'im a team',
      homeButton()
    ])
  )
}

export default SingleTeam
