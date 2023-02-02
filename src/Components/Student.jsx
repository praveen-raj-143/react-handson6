import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'
import { data } from '../RotesFile/Routesfile'
import { useContext } from 'react'
const Student = () => {

    const arr=useContext(data).array
  return (
    <div>
      <div className='cont'>
        <p className='cont1'>Student Details</p>
        <Link to='/fourth'><button className='cont2'>Add New Student</button></Link>
      </div>
      <div className='tpos'>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            </thead>
            {
                arr.map((value,index)=>{
                    return(
                        <tbody key={index}>
                            <tr>
                <td>{value.Name}</td>
                <td>{value.Age}</td>
                <td>{value.Course}</td>
                <td>{value.Batch}</td>
                <td><Link to='/fifth' state={{data:index}}><p>Edit</p></Link></td>
            </tr>
                        </tbody>
                    )
                })
            }
        </table>
      </div>
    </div>
  )
}

export default Student
