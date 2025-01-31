
import '../../css/app.css'; 

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import AppLayout from './Layouts/AppLayout'
import HeroSection from './Layouts/MainComponents'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
        element: <HeroSection />,
        },
        {
          path: "About",
      element: <About />,
        },
        {
          path: "Contact",
      element: <Contact />,
        }
      ]
    },

  ]);

  return  <RouterProvider router={router} />;
}

export default App

