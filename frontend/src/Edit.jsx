import {useState,useEffect} from 'react';
// import Card from './Card';
import { useParams } from 'react-router-dom';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const courseState=atom({
    key:'courseState',
    default:''
})

function Edit(){

    const setCourseone=useSetRecoilState(courseState);
    const {courseId}=useParams();

    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
        method:'GET',
        headers:{
        "authorization":"Bearer "+localStorage.getItem('token')}
    }).then((value)=>{return value.json()}).then((data)=>{
        // const dataObtained=0;
        for(let i=0;i<data.courses.length;i++){
             if(data.courses[i].id==courseId){
                // console.log(data.courses[i]);
                setCourseone(data.courses[i]);
             }
        }
    })
    },[])

    

    return <div style={{paddingTop:'5vh',display:'flex', justifyContent:'center'}}>
    {console.log('main div')}
    <UpdateCard courseId={courseId}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Cardone/>
    
    </div>
}

export default Edit;

function UpdateCard(props){
console.log('update card')
    const setCourseone=useSetRecoilState(courseState);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const [link,setLink]=useState('');

    return <div>
        <center>
        <div style={{border:"1px solid gray", width:"50vh", paddingTop:"10vh", paddingBottom:"8vh", paddingLeft:"5vh", paddingRight:"5vh"}}>
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
            
            <Button variant='contained' onClick={()=>{
                fetch('http://localhost:3000/admin/courses/'+props.courseId,{
                    method:'PUT',
                    headers:{
                        "authorization":"Bearer "+localStorage.getItem('token'),
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        "title":title,
                        "description":description,
                        "price":price,
                        "imageLink":link,
                        "published":"true"
                    })
                }).then((value)=>{ return value.json()}).then((data)=>{
                    // console.log(data);
                    // alert('Course Updated');
                    setCourseone({
                        "title":title,
                        "description":description,
                        "price":price,
                        "imageLink":link,
                        "published":"true"
                    });

                })
            }}>Save</Button>
            </div>
    </center>
    </div>
}

function Cardone(){
console.log('Card');
    const courseone= useRecoilValue(courseState);

    return <div  style={{paddingTop:'5vh',marginLeft:'1vh',marginBottom:'5vh'}}>
    <Card sx={{ maxWidth: 300,minWidth:300,height:'50vh' }}>
      <CardMedia
        component="img"
        height="140"
        image={courseone.imageLink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {courseone.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {courseone.description}
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
          Rs. {courseone.price}/-
        </Typography>
      </CardContent>
    </Card>&nbsp;&nbsp;
    </div>

} 