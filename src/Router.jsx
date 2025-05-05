import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from './HomeLayout';
import Home from './pages/Home';
import CategoryNews from './pages/CategoryNews';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[

            {
                path: "",
              element: <Home></Home> ,
            },
            {
                path: "/category/:id",
              element: <CategoryNews></CategoryNews> ,
              loader: ()=> fetch("/public/news.json"),
            }


        ]
        

        

    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>

    },
    {
        path: "/news",
        element: <h2>Error</h2>

    }
])

export default Router;