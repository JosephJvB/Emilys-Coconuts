import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

const MainNav = connectFela(styles)(props => {
  return (
    h('div', {
      className: styles.containter
    }, [
      h('div', {
        className: styles.navItem
      }, 'OVERWATCH'),
      h('div', {
        className: styles.navItem
      }, 'HOME'),
      h('div', {
        className: styles.navItem
      }, 'STANDINGS'),
      h('div', {
        className: styles.navItem
      }, 'TEAMS'),
      h('div', {
        className: styles.navItem
      }, 'SEASON1'),
      h('div', {
        className: styles.navItem
      }, 'EMCO')
    ])
  )
})

export default MainNav
