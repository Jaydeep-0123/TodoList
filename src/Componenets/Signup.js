import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [conf_password,setConf_password]=useState('');
  const navigate=useNavigate();

  async function signupData()
  {
    let result=await fetch("http://localhost:5000/user/signup",{
        method:"post",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
             Name:name,
             Email:email,
             Password:password,
             Conf_Password:conf_password,
        })
    });
    console.log(result);
    if(result.status===201)
    {
      navigate('/Login');
    }
  }
 


  
  return (
    <div className='Allclass'>
    <div className='container1' style={{width:"50%"}}>
        <form action='#'>
        <h1>Signup</h1><hr/>
        <label for="name" className='lable'>Name:</label>
        <input type="text" name="name" className='form-control' placeholder='Enter the name' required onChange={(e)=>{setName(e.target.value)}}/>
        <label for="email" className='lable'>Email:</label>
        <input type='Email' name="email" className='form-control' placeholder='Enter the email' required onChange={(e)=>{setEmail(e.target.value)}}/>
        <label for="password" className='lable'>Password:</label>
        <input type="password" name="password" className='form-control' placeholder='Enter the paasword' required onChange={(e)=>{setPassword(e.target.value)}}/>
        <label for="password" className='lable'>Conf Password</label>
        <input type='password' name="password" className='form-control' placeholder='Enter the conf_password' required onChange={(e)=>{setConf_password(e.target.value)}}/>

        <input type="button" value="signup"   className='btn btn-success' style={{width:"50%",margin:"6%"}} onClick={()=>{signupData()}}/>
        </form>
        </div>
    </div>
  )
}
