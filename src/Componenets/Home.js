import React, { useEffect, useState } from 'react'
import './Home.css'
export default function Home()
{
  const [data,setData]=useState([]);
  const apiData=async()=>{
    const result=await fetch('http://localhost:5000/task');
    const jsonData=await result.json();
    console.log(jsonData)
    setData(jsonData.Data.result);
  }
  useEffect(()=>{
      apiData();
  },[])
  return (
    <div>
       {
        data.map((e)=>{
          
          return <div style={{marginTop:"5%"}}>
            <ul className='list-group list-group-flush'>
           <li className='list-group-item list-group-item-success'>{"Title=>"+" "+e?.Title}</li>
           <li className='list-group-item active'>{"Description=>"+" "+e?.Description}</li>
           </ul>
           
          </div>

        })
       }

    </div>
  )
}
