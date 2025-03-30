import React from 'react'
import { Box, Typography , Avatar , Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import Box from '@mui/icons-material/Box';
import logo from './../assets/logo.png'
import { red } from '@mui/material/colors'
import { Height } from '@mui/icons-material'
function HomeUI() {
  return (
    <>
      <Box sx={{display:'flex', height:'100vh'}}>
        <Box sx={{width:'80%',boxShadow:'1',mx:'auto',my:'auto'}}>
        <Avatar  src={logo} sx={{mx:'auto', mt:'10px', width: '150px' , height:'150px' }} />
        <Typography variant='h5' sx={{fontWeight:'bold' , color:'#120265' , textAlign:'center' , mt:'20px'}}>
          ยินดีต้อนรับสู่
        </Typography>
        <Typography sx={{fontSize:'25px' , fontWeight:'bold' , textAlign:'center' , color:'#f9e00e' , mb:'20px'}}>
          Tanatorn Site
        </Typography>
        <Button component={Link} to='/login' variant='contained' sx={{mb:'30px' , display:'block' ,mx:'auto' , width:'200px' , backgroundColor:'#109cea' ,textAlign:'center'}}>
          ไปหน้าLogin
        </Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeUI