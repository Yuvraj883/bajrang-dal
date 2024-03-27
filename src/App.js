import {  } from '@mui/material'

import SignIn from './Components/SignIn'
import Gallery from './Pages/Gallery'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function App() {
  const [signedIn, setSignedIn] = useState(localStorage.getItem('signedIn'));

  const navigate = useNavigate();
  useEffect(()=>{
   if(signedIn){
    navigate('/gallery');
   }
   else{
    navigate('sign-in');
   }
  },[]);
  return (
    <>

      {/* <SignIn/>
      <Gallery/> */}
      <Outlet/>

    </>
  )
}

export default App
