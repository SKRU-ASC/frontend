import { Home, Cart } from '../pages/Customer'
import { Login, Booking } from '../pages/Admin'
import Error from '../pages/Error'
import Drawer from '../pages/Drawer/Drawer'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import create from 'zustand';

const UseBoundStore = create(() => ({ open: false, title: 'Title' }));

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<Error />} >
            {/* <Route errorElement={<Error />}></Route> */}
            <Route index element={<Home />}></Route>
            <Route path='cart' element={<Cart />}></Route>

            <Route path='admin'>
                <Route path='login' element={<Login />}></Route>
                <Route element={<Drawer UseBoundStore={UseBoundStore} />}>
                    <Route index element={<Booking UseBoundStore={UseBoundStore} />}></Route>
                </Route>
            </Route>

        </Route>,
    ),
)