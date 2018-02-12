import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const stages = [ 1, 2, 3, 4 ]

const Season1 = () => {
  return (
    h(F, [
      'im season1',
      h('br'),
      stages.map(s => h('button', { key: s, className: 'button is-large' }, `Stage${s}`)),
      h('br'),
      h(Link, { to: '/' }, [
        h('button', 'HOME')
      ])
    ])
  )
}

export default Season1
