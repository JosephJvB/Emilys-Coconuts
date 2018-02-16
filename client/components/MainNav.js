import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

const { log } = global.console

const MainNav = connectFela(styles)(props => {
  const { styles } = props
  // log(props)
  return (
    h('div', {
      className: styles.mainNav
    }, [
      h('div', {
        className: styles.bigItem
      }, 'OVERWATCH'),
      h(Link, { to: '/' }, [
        h('div', {
          className: styles.navItem
        }, 'HOME')
      ]),
      h(Link, { to: 'Standings' }, [
        h('div', {
          className: styles.navItem
        }, 'STANDINGS')
      ]),
      h(Link, { to: 'Teams' }, [
        h('div', {
          className: styles.navItem
        }, 'TEAMS')
      ]),
      h(Link, { to: 'Season1' }, [
        h('div', {
          className: styles.navItem
        }, 'SEASON1')
      ]),
      h('div', {
        className: styles.smallItem,
        onClick: () => window.location = 'https://www.google.co.nz/search?q=wolf+with+watermelon&oq=wolf+with+water&aqs=chrome.1.69i57j0l5.7167j1j7&sourceid=chrome&ie=UTF-8'
      }, 'EMCO')
    ])
  )
})

export default MainNav
