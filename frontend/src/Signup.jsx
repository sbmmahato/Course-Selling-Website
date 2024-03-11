import {useState} from 'react'
import { Navigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup(){

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

return( 
<div style={{marginTop:"15vh"}}>
    
    <center>
<div style={{border:"1px solid gray", width:"45vh", paddingTop:"20vh", paddingBottom:"20vh", paddingLeft:"5vh",  paddingRight:"5vh"}}>
<TextField fullWidth 
  id="outlined-controlled" 
  label="Username" onChange={(e)=>{
        setUsername(e.target.value);
    }} /><br/><br/>
    <TextField fullWidth 
  id="outlined-controlled"
  label="Password" type='password' onChange={(e)=>{
        setPassword(e.target.value);
    }} /><br/><br/>
    <Button variant="contained" onClick={()=>{//connected with HSC1 week3 02-course-app-medium.js
        fetch('http://localhost:3000/admin/signup',{
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{
                "Content-Type":"application/json"
            }
            
        }).then((value)=>{return value.json()}).then((data)=>{
            console.log(data);
            localStorage.setItem('token',data.token);
            console.log(data);
            window.location='/home';      
        })
    }}>Sign Up</Button>
</div>
</center>
</div>
)
}

export default Signup;