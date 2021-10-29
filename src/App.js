import React from 'react'
import Router from './Router'

import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'

const App = () => {
  
  return (
  <BrowserRouter>
        <Router/>
  </BrowserRouter>
)}

export default hot(module)(App)
