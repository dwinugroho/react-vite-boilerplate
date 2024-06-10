import './styles/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components'

import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
)
