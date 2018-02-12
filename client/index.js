import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <AppRoutes />
    </Router>,
    document.getElementById('app')
  )
})
