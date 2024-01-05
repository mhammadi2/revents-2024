import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './app/layout/App.tsx'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
