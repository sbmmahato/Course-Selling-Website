import Button from '@mui/material/Button';

function Appbar(){
    return <div style={{display:'flex', justifyContent:'space-between'}}>

        <div>
            <img src='https://cdn.discordapp.com/attachments/596060283085127702/1191451702570778694/myCourse.png?ex=65a57cdd&is=659307dd&hm=dcbf91399e3f41d53f8d56e7c9e69e40aa32b94db33b6b0d64a59b68dd9a0620&' style={{width:'20vh', height:'4.5vh'}}/>
        </div>
        <div style={{display:'flex'}}>
            <Button variant="outlined" onClick={()=>{window.location='/addcourse'}}>Add Course</Button> &nbsp;
            <Button variant="contained" onClick={()=>{window.location='/login'}}>Login</Button> &nbsp;
             <Button variant="contained" onClick={()=>{window.location='/signup'}}>Sign Up</Button>
        </div>

    </div>

}

export default Appbar;