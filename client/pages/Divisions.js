import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Divisions = () => {
  return (
    h(F, [
      'im divisions',
      h(Link, { to: '/' }, [
        h('button', 'HOME')
      ])
    ])
  )
}

export default Divisions
