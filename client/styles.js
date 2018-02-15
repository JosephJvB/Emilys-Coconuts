import { combineRules } from 'fela'

const navRow = () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2em'
})

module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  navRow: combineRules(navRow, () => ({})),
  darkNavRow: combineRules(navRow, () => ({
    backgroundColor: 'rgba(218, 222, 229, 0.5)'
  })),
  title: () => ({
    fontSize: '36px',
    fontWeight: '400',
    padding: '2em'
  })
}
// this styling seems to work. but it's pretty goofy without using combineStyles so I think I'll leave it here..
// unless I actually bring react-fela in? Gave it a first crack. need a guide on how to set it up.
// can probably use it once it's set up. but idk how to do that lol
