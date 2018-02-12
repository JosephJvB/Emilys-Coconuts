import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    h(F, [
      'im teams',
      h(Link, { to: '/' }, [
        h('button', 'HOME')
      ])
    ])
  )
}

export default Teams
