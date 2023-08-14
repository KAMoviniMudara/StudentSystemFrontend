import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper ,Button} from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const[students,setStudents]=React.useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      }).then(()=>{
        console.log("New Student added")
      })
    }
    

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
    
    <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
      <TextField id="standard-basic" label="Student address" variant="standard" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
    </Box>
    {name}
    {address}
    </Paper>
    </Container>
  );
}
