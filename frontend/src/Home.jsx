import { useState, useEffect} from 'react';
import ImgMediaCard from './Card';

function Home(){

const [courses,setCourses]=useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/admin/courses',{
        method:'GET',
        headers:{
        "authorization":"Bearer "+localStorage.getItem('token')}
    }).then((value)=>{
       return value.json()
    }).then((data)=>{
        console.log(data.courses);
         setCourses(data.courses);
    })
},[])

// console.log(courses);

return <div style={{display:'flex', paddingTop:'10vh',paddingBottom:'10vh',paddingLeft:'20vh',paddingRight:'20vh', flexWrap:'wrap', justifyContent:'center'}}>
   {courses.map(a=>{
    return <ImgMediaCard course={a}/>})}
</div>
}

export default Home;

