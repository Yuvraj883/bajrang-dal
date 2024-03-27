import Header from '../Components/Header'
import Cards from '../Components/Card'
import ImageGallery from '../Components/ImageGallery'
import React, { useState } from 'react';
import Unauthorized from './Unauthorized';

const Gallery = () => {
  const [signedIn, setSignedIn] = useState(localStorage.getItem('signedIn'));

  return (
    <>
      {signedIn && (
        <>
          <Header />
          <Cards />
          <ImageGallery />
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
