import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const teamData = require('../../data/teams')
// const w = window.screen.availWidth

const TeamPage = () => {
  const row1 = teamData.slice(0, 4)
  const row2 = teamData.slice(4, 8)
  const row3 = teamData.slice(8, 12)

  const renderTile = (team) => {
    const { logo, name } = team
    return (
      h('div', { className: 'column' }, [
        h(Link, { to: `/Teams/${nameToUrl(name)}` }, [
          h('img', { src: logo })
        ])
      ])
    )
  }

  const nameToUrl = name => name.replace(' ', '_')

  return (
    h(F, [
      'im team page',
      h('div', { className: 'columns' }, [
        row1.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row2.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row3.map(team => renderTile(team))
      ]),
      h(Link, { to: '/' }, [
        h('button', 'HOME')
      ])
    ])
  )
}

export default TeamPage
