module.exports = {
  container: () => ({
    textAlign: 'center'
  }),
  navRow: () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '2em'
  }),
  navItem: () => ({
    backgroundColor: '#E0E0E0',
    border: '1px solid',
    borderColor: 'rgba(171, 168, 166, 0.6)',
    padding: '0.4em 3em',
    width: '100%'
  }),
  title: () => ({
    fontSize: '36px',
    fontWeight: '400',
    fontFamily: 'Industry'
  }),
  teamTile: () => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }),
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
  }),
  teamPic: () => ({
    height: '150px',
    width: '612px'
  }),
  logo: () => ({
    height: '110px',
    width: '110px'
  })
}
