import { combineRules } from 'fela'

const title = () => ({
  fontSize: '36px',
  fontWeight: '400',
  fontFamily: 'Industry',
  color: 'black'
})

const homeItem = () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2em'
})

module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  title: combineRules(title, () => ({
    padding: '2.5rem 0'
  })),
  subTitle: combineRules(title, () => ({
    fontSize: '24px'
  })),
  homeItem: combineRules(homeItem, () => ({})),
  darkHomeItem: combineRules(homeItem, () => ({
    backgroundColor: 'rgba(220, 220, 220, 0.6)',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '#d3d3d3'
  })),
  sig: () => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '6em 2em',
    fontSize: '12px'
  }),
  pic: () => ({
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '3em 0',
    backgroundColor: 'EAEAEA'
  })
}
