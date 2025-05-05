import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from './HomeLayout';
import Home from './pages/Home';
import CategoryNews from './pages/CategoryNews';
import Login from './Login';
import Authen from './Authen';
import Register from './pages/Register';
import NewsDetails from './pages/NewsDetails';
import PrivateRoute from './pages/PrivateRoute';
import Loading from './pages/Loading';

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
              hydrateFallbackElement : <Loading></Loading>
            }


        ]
        

        

    },
    {
        path: "/auth",
        element: <Authen></Authen>,
        children:[
            {
                path: "/auth/login",
                element : <Login></Login>,
               },
               {
                path: "/auth/register",
                element : <Register></Register>,
               }
        ]

    },
    {
        path: "/news-details/:id",
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>,
            </PrivateRoute>
        ),
        loader : ()=> fetch("/public/news.json")

    }
])

export default Router;