import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles/index'

import MainNav from '../components/MainNav'
import { signature } from '../components/dumb-components'

const Divisions = connectFela(styles)(props => {
  const { history: { goBack }, styles } = props
  return (
    h('div', {
      className: styles.container
    }, [
      h(MainNav, { goBack }),
      'im divisions',
      h(signature)
    ])
  )
})

export default Divisions
