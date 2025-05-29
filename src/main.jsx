import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from './utils'
import { ContextProvider } from './context'
// import App from './App.jsx'
import { reducer, initialState } from './context/reducer'
const App = lazy(()=> import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>,
)
