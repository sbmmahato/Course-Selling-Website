import {useState,useEffect} from 'react';

function Content(){

    const [course,setCourse]=useState('');
    
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
                setCourse(data.courses[i]);
             }
        }
    })
    },[])

    return <div>
        
    </div>
}

export default Content;