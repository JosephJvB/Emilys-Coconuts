import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    h(F, [
      'emily\'s ',
      h('a', {
        href: 'https://www.figma.com/proto/bbCtb1UyXlZln9AHGRYlShJF/Overwatch-League?scaling=contain&node-id=2%3A0&redirected=1'
      }, 'coconuts'),
      h('br'),
      h(Link, { to: 'Season1' }, [
        h('button', 'Season1')
      ]),
      h(Link, { to: 'Standings' }, [
        h('button', 'Standings')
      ]),
      h(Link, { to: 'Teams' }, [
        h('button', 'Teams')
      ]),
      h(Link, { to: 'Divisions' }, [
        h('button', 'Divisions')
      ])
    ])
  )
}

export default Home

// this page starts off as that main picture, then onclick it renders the nav options:
// Season 1, Standings, Teams, Divisions
