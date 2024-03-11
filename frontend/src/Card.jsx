import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (<div  style={{marginLeft:'1vh',marginBottom:'5vh'}}>
    <Card sx={{ maxWidth: 300,minWidth:300,height:'50vh' }}>
      <CardMedia
        component="img"
        height="140"
        image={props.course.imageLink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography><br/>
        <Typography gutterBottom variant="h5" component="div">
          Rs. {props.course.price}/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
            window.location="/Edit/"+props.course.id;
        }}> Edit Course</Button>
        <Button size="small" onClick={()=>{alert('view clicked')}}> View Course</Button>
      </CardActions>
    </Card>&nbsp;&nbsp;
    </div>);
}
