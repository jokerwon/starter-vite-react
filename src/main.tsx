import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

import '@unocss/reset/eric-meyer.css'
import 'virtual:uno.css'
import './styles/global.css'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
