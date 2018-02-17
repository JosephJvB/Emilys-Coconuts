import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../../styles/index'

import MainNav from '../../components/MainNav'
import { signature } from '../../components/dumb-components'

import teamData from '../../../data/teams'

const SingleTeam = connectFela(styles)(props => {
  const { history: { goBack }, styles } = props
  const activeTeam = props.match.params.name.replace(/_/g, ' ')
  const activeInfo = teamData.find(team => team.name === activeTeam)
  return (
    h('div', {
      className: styles.teamTile
    }, [
      h(MainNav, { goBack }),
      activeInfo.name,
      h(signature)
    ])
  )
})

export default SingleTeam
