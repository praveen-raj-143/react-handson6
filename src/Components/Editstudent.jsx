import React from 'react'
import './Student.css'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { data } from '../RotesFile/Routesfile'
import { useContext } from 'react'
const Editstudent = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const index=location.state.data
    const arr=useContext(data).array
    const setarr=useContext(data).setfun
    const newObj={
      Name:arr[index].Name,
      Age:arr[index].Age,
      Course:arr[index].Course,
      Batch:arr[index].Batch,
    }
    
    function changecontainer(e){
      newObj[e.target.name]=e.target.value
    }
    function updatetask(){
      setarr((prevObj)=>{
        prevObj[index]=newObj;
        return(prevObj)
      })
      navigate('/second')
    }
  return (
    <div>
      <div className='addcontainer'>
      <input type="text" name='Name' placeholder={arr[index].Name} className='box' onChange={changecontainer}/>
      <input type="number" name='Age'  placeholder={arr[index].Age} className='box' onChange={changecontainer}/>
      <input type="text" name='Course'  placeholder={arr[index].Course} className='box' onChange={changecontainer}/>
      <input type="text" name='Batch'  placeholder={arr[index].Batch} className='box' onChange={changecontainer}/>
      </div>
      <div className='btns'>
      <Link to='/second'><button className='btn'>Cancel</button></Link><button onClick={updatetask} className='btn'>Update</button>
      </div>
    </div>
  )
}

export default Editstudent
