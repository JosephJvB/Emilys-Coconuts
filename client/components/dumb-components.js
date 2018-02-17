import h from 'react-hyperscript'
import { Fragment as F } from 'react'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles/index'

const { log } = global.console

export const pic = connectFela(styles)(props => {
  return (
    h(F, [
      h(Link, { to: '/Home' }, [
        h('img', { src: '/images/main.png', className: props.styles.pic })
      ]),
      h(signature)
    ])
  )
})

export const homeButton = () => {
  return (
    h(Link, { to: '/Home' }, [
      h('button', 'HOME')
    ])
  )
}

export const backButton = ({styles, goBack}) => {
  return (
    h('button', {
      className: styles.backNav,
      onClick: goBack
    }, 'BACK')
  )
}

export const renderTile = connectFela(styles)(({team}) => {
  const { logo, name } = team
  const nameToUrl = name => name.replace(/ /g, '_')
  return (
    h('div', { className: 'column' }, [
      h(Link, { to: `/Teams/${nameToUrl(name)}` }, [
        h('img', { src: logo })
      ])
    ])
  )
})

export const signature = connectFela(styles)(props =>
  h('p', { className: props.styles.sig }, 'made by some idiot nerd ©'))
