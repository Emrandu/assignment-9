import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Statistics from './components/Statistics.jsx';
import JobDetails from './components/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
    children:[
      {
       path:'/',
       element:<Home/>,
       loader:  ()=> fetch('jobData.json')  
      },
      {
       path:'/',
       element:<Statistics/>
      
      
      },
      {
       path:'details/:cca2',
       element:<JobDetails />,
       loader:({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.cca2}`)
      

      
      
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
