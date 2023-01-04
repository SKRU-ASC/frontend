import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClickToComponent } from 'click-to-react-component'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import './assets/css/index.css'
import { Home, Cart } from './pages/Customer'
import { Login, Booking } from './pages/Admin'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route errorElement={<Error />}></Route>
      <Route index element={<Home />}></Route>
      <Route path='cart' element={<Cart />}></Route>

      <Route path='admin'>
        <Route path='login' element={<Login />}></Route>
        <Route index element={<Booking />}></Route>
      </Route>
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      {import.meta.env.DEV === true ? <ClickToComponent /> : null}
    </>
  </React.StrictMode>,
)
