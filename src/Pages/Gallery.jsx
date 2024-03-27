import Header from '../Components/Header'
import Cards from '../Components/Card'
import ImageGallery from '../Components/ImageGallery'
import React, { useEffect, useState } from 'react';
import Unauthorized from './Unauthorized';

const Gallery = () => {
  const [signedIn, setSignedIn] = useState(localStorage.getItem('SignedIn'));



  return (
    <>
      {signedIn && (
        <>
        <Header />
        <div className='p-10 shadow-md'>

          {/* <Cards /> */}
          <ImageGallery />
        </div>

        </>
      )}
      {
        !signedIn &&
        <Unauthorized/>
      }
    </>
  );
}

export default Gallery;
