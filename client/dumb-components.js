import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

export const homeButton = () => {
  return (
    h(Link, { to: '/' }, [
      h('button', 'HOME')
    ])
  )
}

export const renderTile = team => {
  const { logo, name } = team
  const nameToUrl = name => name.replace(' ', '_')
  return (
    h('div', { className: 'column' }, [
      h(Link, { to: `/Teams/${nameToUrl(name)}` }, [
        h('img', { src: logo })
      ])
    ])
  )
}
