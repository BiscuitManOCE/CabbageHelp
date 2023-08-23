import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Page/component imports
import Home from './pages/home/Home';
import Search from './pages/search/Search'

// Router imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// router, defining what page/components to display when the user goes to different links
// here i have 2 defined so when the user navigates to:
// http://localhost:3000/ <- it will show the "home" page/component
// http://localhost:3000/search <- it will show the "search" page/component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/search",
    element: <Search/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
