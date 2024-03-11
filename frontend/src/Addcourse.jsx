import {useState,useEffect} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Addcourse(){

const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState('');
const [link,setLink]=useState('');

 return <div>
    <center>
        <div style={{border:"1px solid gray", width:"70vh", paddingTop:"20vh", paddingBottom:"20vh", paddingLeft:"5vh", paddingRight:"5vh"}}>
        <TextField fullWidth 
        id="outlined-controlled" 
        label="Title" onChange={(e)=>{setTitle(e.target.value)}} /><br/><br/>
            <TextField fullWidth 
        id="outlined-controlled" 
        label="Description" onChange={(e)=>{setDescription(e.target.value)}} /><br/><br/>
            <TextField fullWidth 
        id="outlined-controlled" 
        label="Price" onChange={(e)=>{setPrice(e.target.value)}} /><br/> <br/>
            <TextField fullWidth 
        id="outlined-controlled" 
        label="Image Link" onChange={(e)=>{setLink(e.target.value)}} /><br/>  <br/>
            
            <Button variant="contained" onClick={()=>{
                fetch('http://localhost:3000/admin/courses',{
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json",
                        "authorization":"Bearer "+localStorage.getItem('token')
                    },
                    body:JSON.stringify({
                        "title": title,
                        "description": description,
                        "price": price,
                        "imageLink": link,
                        "published": "true"
                    })
                }).then((value)=>{return value.json()}).then((data)=>{
                    console.log(data);
                })
            }}>Add</Button>
            </div>
    </center>

 </div>
}

export default Addcourse;