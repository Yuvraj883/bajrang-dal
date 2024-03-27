import {  } from '@mui/material'

import SignIn from './Components/SignIn'
import Gallery from './Pages/Gallery'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>

      {/* <SignIn/>
      <Gallery/> */}
<Outlet/>

    </>
  )
}

export default App
