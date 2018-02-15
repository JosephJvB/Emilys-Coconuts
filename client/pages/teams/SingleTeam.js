import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../../styles'
import { homeButton, backButton } from '../../components/dumb-components'

import teamData from '../../../data/teams'

const SingleTeam = connectFela(styles)(props => {
  const { goBack } = props.history
  const activeTeam = props.match.params.name.replace(/_/g, ' ')
  const activeInfo = teamData.find(team => team.name === activeTeam)
  return (
    h(F, [
      h(backButton, { goBack }),
      activeInfo.name,
      h(homeButton)
    ])
  )
})

export default SingleTeam
