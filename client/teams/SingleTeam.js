import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { homeButton, backButton } from '../dumb-components'

const teamData = require('../../data/teams')

const SingleTeam = props => {
  const { goBack } = props.history
  const activeTeam = props.match.params.name.replace(/_/g, ' ')
  const activeInfo = teamData.find(team => team.name === activeTeam)
  return (
    h(F, [
      h(backButton, { goBack }),
      activeTeam,
      h(homeButton)
    ])
  )
}

export default SingleTeam
