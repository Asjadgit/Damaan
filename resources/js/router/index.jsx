import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

const index = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default index
