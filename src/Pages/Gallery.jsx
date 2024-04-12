import Header from '../Components/Header'
import Cards from '../Components/Card'
import ImageGallery from '../Components/ImageGallery'
import React, { useEffect, useState } from 'react';
import Unauthorized from './Unauthorized';
import Typewriter from '../Components/TypeWriter';

const Gallery = () => {
  // const [signedIn, setSignedIn] = useState(localStorage.getItem('SignedIn'));



  return (
    <>

        <>
        {/* <Header /> */}
        <div className='p-5 shadow-md'>
          <Typewriter/>

          {/* <Cards /> */}
          <ImageGallery />
        </div>

        </>

      {/* {
        !localStorage.getItem('SignedIn') &&
        <Unauthorized/>
      } */}
    </>
  );
}

export default Gallery;
