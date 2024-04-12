import {  } from '@mui/material'
import Header from './Components/Header'
import SignIn from './Components/SignIn'
import Gallery from './Pages/Gallery'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {app} from './Firebase';
import {get, getDatabase, ref,set} from 'firebase/database';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import SignUp from './Pages/SignUp';
function App() {

  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        // alert("User Exists");
        setUser(user);
        // navigate('/gallery')
        console.log(user);

      }
      else{
        alert(user);
        setUser(null);
        navigate('/sign-in');
        console.log("You are logged out");
      }
    })

  },[]);

  if(user===null){
    return(
      <>
      <SignIn/>
      {/* <SignUp/> */}
      </>
    )
  }

  return (
    <>

     <Header/>
     <Outlet/>

    </>
  )
}

export default App
