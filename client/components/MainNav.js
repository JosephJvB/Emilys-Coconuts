import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles/nav'
import { backButton } from './dumb-components'

const { log } = global.console

// main nav gets props from all pages
// the goBack function it's using will mean wipe any info on previous active page
// shouldnt be anything to save on front end so allg

const MainNav = connectFela(styles)(props => {
  const {
    goBack,
    pathname,
    styles
  } = props

  const isHome = pathname === '/Home'

  return (
    h('div', {
      className: styles.mainNav
    }, [
      !isHome && h(backButton, { goBack, styles }),
      h('div', {
        className: styles.bigItem
      }, 'OVERWATCH'),
      h(Link, { to: '/Home' }, [
        h('div', {
          className: styles.navItem
        }, 'HOME')
      ]),
      h(Link, { to: '/Standings' }, [
        h('div', {
          className: styles.navItem
        }, 'STANDINGS')
      ]),
      h(Link, { to: '/Teams' }, [
        h('div', {
          className: styles.navItem
        }, 'TEAMS')
      ]),
      h(Link, { to: '/Season1' }, [
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
