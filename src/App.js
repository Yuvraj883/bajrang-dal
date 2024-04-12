import {  } from '@mui/material'
import Header from './Components/Header'
import SignIn from './Components/SignIn'
import Gallery from './Pages/Gallery'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {app} from './Firebase';
import {get, getDatabase, ref,set} from 'firebase/database';
function App() {
    const db = getDatabase(app);
    const putData = ()=>{
      set(ref(db,"users/yuvraj" ),{
        id:8,
        name:'Yuvraj Singh',
        age:20
      });
    }

    useEffect(()=>{
      putData();
    },[]);

  const [signedIn, setSignedIn] = useState(localStorage.getItem('signedIn'));

  const navigate = useNavigate();
  useEffect(()=>{
   if(!signedIn){
    navigate('sign-in');
   }

  },[]);
  return (
    <>

      {/* <SignIn/>
      <Gallery/> */}
      {signedIn &&
      <Header/>}

      <Outlet/>

    </>
  )
}

export default App
