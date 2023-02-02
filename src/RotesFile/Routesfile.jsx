import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Student from '../Components/Student'
import Contact from '../Components/Contact'
import Addstudent from '../Components/Addstudent'
import Editstudent from '../Components/Editstudent'
import { createContext } from 'react'
import { useState } from 'react'

const data=createContext();

const Routesfile = () => {
    const[arr,setarr]=useState([
        {Name:"Praveen Raj",Age:"23",Course:"Full Stack",Batch:"EA18"}
    ])
  return (
    <data.Provider value={{array:arr,setfun:setarr}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/second' element={<Student/>} />
        <Route path='/third' element={<Contact/>}/>
        <Route path='/fourth' element={<Addstudent/>} />
        <Route path='/fifth' element={<Editstudent/>} />
    </Routes>
    </data.Provider>
  )
}

export default Routesfile
export {data}