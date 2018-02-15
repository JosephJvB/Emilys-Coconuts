import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

export const homeButton = () => {
  return (
    h(Link, { to: '/' }, [
      h('button', 'HOME')
    ])
  )
}

export const backButton = ({goBack}) => {
  return (
    h('button', {
      onClick: goBack
    }, 'BACK')
  )
}

export const renderTile = team => {
  const { logo, name } = team
  const nameToUrl = name => name.replace(/ /g, '_')
  return (
    h('div', { className: 'column' }, [
      h(Link, { to: `/Teams/${nameToUrl(name)}` }, [
        h('img', { src: logo })
      ])
    ])
  )
}
