import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Standings = () => {
  return (
    h(F, [
      'im standings',
      h('br'),
      'Im gonna be a lovely table :)',
      h(Link, { to: '/' }, [
        h('button', 'HOME')
      ])
    ])
  )
}

export default Standings
