import Header from '../Components/Header'
import Cards from '../Components/Card'
import ImageGallery from '../Components/ImageGallery'
import React, { useState } from 'react';

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
    </>
  );
}

export default Gallery;
