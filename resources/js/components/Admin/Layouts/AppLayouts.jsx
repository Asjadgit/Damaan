import React from 'react'
import Header from '../../Admin/Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Admin/Layouts/Footer'
import SideBar from '../../Admin/Layouts/SideBar';


const AppLayouts = () => {
  return (
   <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
   </>
  )
}

export default AppLayouts