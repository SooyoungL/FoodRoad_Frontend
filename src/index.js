import React from 'react'
import ReactDOM from 'react-dom';
//import { hydrate } from 'react-dom'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);
//hydrate(<App/>, document.getElementById('root'))