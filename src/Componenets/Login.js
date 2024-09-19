import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
export default function Login() {
  const [isLogin,setislogin]=useState(false);
  const [email,setEmail]=useState({});
  const [password,setPassword]=useState({});
  const navigate=useNavigate();
  const cookie=new Cookies();
  async function loginData(){
    let response = await fetch('http://localhost:5000/user/Login?Email='
    +email+"&Password="+password);

        if(response.status===400)
        {
           setislogin(true);
           console.log("Failed");
        }
        else if(response.status===200)
        {
          response=await response.json();
          setislogin(false);
          console.log(response);
          cookie.set('user',JSON.stringify(response.Data));
          console.log('response')
          navigate('/Home');
        }
      
  }
  return (
    <div>
         <div className='container' style={{width:"50%"}}>
            <h1 style={{margin:"20px", color:"white"}}><marquee>Login</marquee></h1>
            {
            isLogin&&<h3 style={{color:"red"}}>Login Failed</h3>
            }
            <hr></hr>
            <label>Email:</label>
            <input type='email' id="email" name='email' className='form-control' required placeholder='Enetr the email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' id='password' name='password' className='form-control' placeholder='Enter the password' required onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className='btn btn-success'  style={{margin:"50px"}} onClick={()=>{loginData()}}>Login</button>
         </div>
         
    </div>
  )
}
