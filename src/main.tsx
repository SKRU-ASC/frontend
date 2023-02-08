import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClickToComponent } from 'click-to-react-component'
import {
  RouterProvider,
} from 'react-router-dom'

import './assets/css/index.css'

import { ThemeProvider } from '@emotion/react'
import { theme } from './configs/Theme'
import { routes } from './routes/routes'
import { CssBaseline } from '@mui/material'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
      {import.meta.env.DEV === true ? <ClickToComponent /> : null}
    </>
  </React.StrictMode>,
)
