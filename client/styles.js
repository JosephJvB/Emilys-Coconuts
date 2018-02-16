import { combineRules } from 'fela'

const navRow = () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2em'
})

const navItem = () => ({
  backgroundColor: '#E0E0E0',
  border: '1px solid',
  borderColor: 'rgba(171, 168, 166, 0.6)',
  padding: '0.4em 3em',
  width: '100%'
})

module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  navRow: combineRules(navRow, () => ({})),
  darkNavRow: combineRules(navRow, () => ({
    backgroundColor: '#E0E0E0'
  })),
  title: () => ({
    fontSize: '36px',
    fontWeight: '400',
    padding: '1.5em 2em'
  }),
  navItem: combineRules(navItem, () => ({})),
  bigItem: combineRules(navItem, () => ({
    width: '450%'
  })),
  smallItem: combineRules(navItem, () => ({
    width: '30%',
    color: 'white',
    cursor: 'pointer'
  })),
  mainNav: () => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'red'
  }),
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
// this styling seems to work. but it's pretty goofy without using combineStyles so I think I'll leave it here..
// unless I actually bring react-fela in? Gave it a first crack. need a guide on how to set it up.
// can probably use it once it's set up. but idk how to do that lol
