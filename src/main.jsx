import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { Layout} from './components/Layout'
import { Cards,loader as cardLoader } from './components/pages/Cards'
import { CardView } from './components/pages/CardView'
import { Index } from './components/pages/Index'
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Index/>,
      },
      {
        path:'/cards',
        element:<Cards/>,
        loader:cardLoader,
        errorElement:<ErrorPage/>
      },
      {
        path:'/card/view',
        element:<CardView/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
