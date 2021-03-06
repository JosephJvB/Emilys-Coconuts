import { combineRules } from 'fela'

import { navRow, navItem, title, teamTile, mainNav, sig, pic, container, teamPic, logo } from './static'

module.exports = {
  sig: combineRules(sig, () => ({})),
  pic: combineRules(pic, () => ({})),
  container: combineRules(container, () => ({})),
  navRow: combineRules(navRow, () => ({})),
  darkNavRow: combineRules(navRow, () => ({
    backgroundColor: '#E0E0E0'
  })),
  title: combineRules(title, () => ({
    padding: '1.5em 2em'
  })),
  subTitle: combineRules(title, () => ({
    fontSize: '24px'
  })),
  mainNav: combineRules(mainNav, () => ({})),
  navItem: combineRules(navItem, () => ({})),
  bigItem: combineRules(navItem, () => ({
    width: '450%'
  })),
  smallItem: combineRules(navItem, () => ({
    width: '30%',
    color: 'white',
    cursor: 'pointer'
  })),
  backNav: combineRules(navItem, () => ({
    width: '10%'
  })),
  teamTile: combineRules(teamTile, () => ({})),
  teamPic: combineRules(teamPic, () => ({})),
  logo: combineRules(logo, () => ({}))
}
