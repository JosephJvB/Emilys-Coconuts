import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { homeButton } from '../dumb-components'

const teamData = require('../../data/teams')

const SingleTeam = props => {
  const activeTeam = props.match.params.name.replace(/_/g, ' ')
  // team data is an array, find team where team.name = active team :)
  const activeInfo = teamData.find(team => team.name === activeTeam)
  console.log(activeInfo)
  return (
    h(F, [
      activeTeam,
      h(homeButton)
    ])
  )
}

export default SingleTeam
