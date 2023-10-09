import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Error from './Pages/Error/Error.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Provider/PrivateRoute';
import Services from './Pages/Services/Services';
import Details from './Components/Details';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader : () => fetch('/data.json')
      },
      {
        path:'/shop',
        element:<PrivateRoute><Services></Services></PrivateRoute>,
        loader: ()=> fetch('/shop.json')
      },
      {
        path:'/blog',
        element:<PrivateRoute><Blog></Blog></PrivateRoute>,
        loader: () => fetch('/blog.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/detail/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('/public/data.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
