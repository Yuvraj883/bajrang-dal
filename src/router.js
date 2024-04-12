import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import SignIn from './Components/SignIn';
import ErrorPage from './Pages/ErrorPage';
import Gallery from './Pages/Gallery';
import Notes from './Pages/Notes';
import SignUp from './Pages/SignUp';


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<SignIn/>

            },
            {
              path:'/sign-in',
              element:<SignIn/>
            },
            {
                path:'gallery',
                element:<Gallery/>,
            },
            {
              path:'notes',
              element:<Notes/>

            },
            {
              path:'sign-up',
              element:<SignUp/>

            }
        ]

    },

]);
export default router;
