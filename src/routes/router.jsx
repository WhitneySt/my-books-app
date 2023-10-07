import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import PrivatedRoutes from './privatedRoutes'
import PublicRoutes from './publicRoutes'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Layout from '../components/layout/layout'
import Details from '../pages/details/details'

export const AppContext = createContext({});

const Router = () => {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [userLogged, setUserLogged] = useState({});

    const globalState = { isUserLogged, setIsUserLogged, userLogged, setUserLogged };

    return (
        <BrowserRouter basename='/my-books-app'>
            <AppContext.Provider value={globalState}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route element={<PrivatedRoutes isAuthenticate={isUserLogged} />}>
                            <Route index element={<Home />} />
                            <Route path='home' element={<Home />}>
                                <Route path=':name' element={<Details />} />
                            </Route>
                        </Route>
                        <Route element={<PublicRoutes isAuthenticate={isUserLogged} />}>
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                        </Route>
                    </Route>
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

export default Router