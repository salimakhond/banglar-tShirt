import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './component/layout/Main';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Home from './component/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'about',
        element: <About></About>
      }
    ])
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
