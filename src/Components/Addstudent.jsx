import React from 'react'
import './Student.css'
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../RotesFile/Routesfile'
import { useContext } from 'react'
import { useState } from 'react'
const Addstudent = () => {
    const navigate=useNavigate()
    const arr=useContext(data).array
    const[b,setb]=useState({
        Name:'',
        Age:'',
        Course:'',
        Batch:''
    })

    function changetask(e){
        setb({...b,[e.target.name]:e.target.value})
    }

    function addtask(){
        arr.push(b)
        navigate('/second')
    }
  return (
    <div>
      <div className='addcontainer'>
      <input type="text" name='Name' value={b.Name} placeholder='Enter the Name' className='box' onChange={changetask}/>
      <input type="number" name='Age' value={b.Age} placeholder='Enter the Age' className='box'onChange={changetask}/>
      <input type="text" name='Course' value={b.Course} placeholder='Enter the Course' className='box'onChange={changetask}/>
      <input type="text" name='Batch' value={b.Batch} placeholder='Enter the Batch' className='box'onChange={changetask}/>
      </div>
      <div className='btns'>
        <Link to='/second'><button className='btn'>Cancel</button></Link><button className='btn' onClick={addtask}>Submit</button>
      </div>
    </div>
  )
}

export default Addstudent
