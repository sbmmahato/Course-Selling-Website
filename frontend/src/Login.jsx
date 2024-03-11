
import {useState,useEffect} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    return( 
        <div style={{marginTop:"15vh"}}>
    
        <center>
    <div style={{border:"1px solid gray", width:"45vh", paddingTop:"20vh", paddingBottom:"20vh", paddingLeft:"5vh",  paddingRight:"5vh"}}>
    <TextField fullWidth 

      label="Username" onChange={(e)=>{
            setUsername(e.target.value);
        }} /><br/><br/>
        <TextField fullWidth 

      label="Password" type='password' onChange={(e)=>{
            setPassword(e.target.value);
        }} /><br/><br/>
            <Button variant="contained" onClick={()=>{
                fetch('http://localhost:3000/admin/login',{
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json",
                        "username":username,
                        "password":password
                    }
                }).then((value)=>{return value.json()}).then((data)=>{
                    console.log(data);
                    localStorage.setItem('token',data.token);
                    // console.log(data.token);
                    if(localStorage.getItem('token')){window.location='/home'}
                })
            }}>Log In</Button>
        </div>
        </center>
        </div>
        )
}

export default Login;