import React from "react"
import Layout from "../component/common/Layout"
import { createBrowserRouter } from "react-router-dom"
import MainPage from "../Page/home/MainPage"
import Registration from "../Page/auth/Registration"


export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                    index:true,
                    element: <MainPage/>
            },
            {
                path: "/register",
                element: <Registration/>
            }
        ]
    },

])
