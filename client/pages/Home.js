import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

const Home = connectFela(styles)(props => {
  const { styles } = props
  return (
    h('div', {
      className: styles.container
    }, [
      'emily\'s ',
      h('a', {
        href: 'https://www.figma.com/proto/bbCtb1UyXlZln9AHGRYlShJF/Overwatch-League?scaling=contain&node-id=2%3A0&redirected=1'
      }, 'coconuts'),
      h('br'),
      h(Link, { to: 'Season1' }, [
        h('div', {
          className: styles.navRow
        }, 'Season1')
      ]),
      h(Link, { to: 'Standings' }, [
        h('div', {
          className: styles.navRow
        }, 'Standings')
      ]),
      h(Link, { to: 'Teams' }, [
        h('div', {
          className: styles.navRow
        }, 'Teams')
      ]),
      h(Link, { to: 'Divisions' }, [
        h('div', {
          className: styles.navRow
        }, 'Divisions')
      ])

    ])
  )
}
)

export default Home

// this page starts off as that main picture, then onclick it renders the nav options:
// Season 1, Standings, Teams, Divisions

// const rowArr = ['Season1', 'Standings', 'Teams', 'Divisions']

// const renderRow = ({rowArr}) => {
//   console.log(rowArr)
//   return (
//     rowArr.map((row, i) => {
//       i % 2 ? navRow.backgroundColor = 'blue' : navRow.backgroundColor = 'red'
//       h(Link, { to: row }, [
//         h('div', {
//           style: navRow
//         }, row)
//       ])
//     })
//   )
// }
