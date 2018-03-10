import { combineRules } from 'fela'

const navItem = () => ({
  backgroundColor: '#E0E0E0',
  border: '1px solid',
  borderColor: 'rgba(171, 168, 166, 0.6)',
  padding: '0.4em 3em',
  width: '100%',
  color: 'black',
  cursor: 'pointer'
})

module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  mainNav: () => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'red',
    color: 'black'
  }),
  navItem: combineRules(navItem, () => ({})),
  bigItem: combineRules(navItem, () => ({
    width: '450%',
    cursor: 'default'
  })),
  smallItem: combineRules(navItem, () => ({
    width: '30%',
    color: 'white'
  })),
  backNav: combineRules(navItem, () => ({
    width: '10%'
  }))
}
