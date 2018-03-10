import { combineRules } from 'fela'

module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  teamPic: () => ({
    height: '150px',
    width: '612px'
  }),
  logo: () => ({
    height: '110px',
    width: '115px'
  }),
  teamTile: () => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '150px'
  }),
  tileContainer: () => ({
    textAlign: 'center',
    flexWrap: 'wrap',
    display: 'flex'
  })
}
