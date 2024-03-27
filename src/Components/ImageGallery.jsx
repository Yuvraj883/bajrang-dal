import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery() {
  const [selectedItem, setSelectedItem] =useState(null);

  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={selectedItem === item.id ? 'z-10  transform scale-150 transition-transform duration-300' : ''}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            className="rounded-md"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    id:14,
    img:'../../image14.png',
    title:'meme'
  },
  // {
  //   id: 1,
  //   img: '../../image1.png',
  //   title: 'Sink',
  // },
  {
    id: 2,
    img: '../../image2.png',
    title: 'Sink',
  }, {
    id: 3,
    img: '../../image3.png',
    title: 'Sink',
  },
  {
    id: 13,
    img: '../../image13.png',
    title: 'Sink',
  },
  {
    id: 4,
    img: '../../image4.png',
    title: 'Sink',
  }, {
    id: 5,
    img: '../../image5.png',
    title: 'Sink',
  }, {
    id: 6,
    img: '../../image6.png',
    title: 'Sink',
  }, {
    id: 7,
    img: '../../image7.png',
    title: 'Sink',
  },

  {
    id: 11,
    img: '../../image11.png',
    title: 'Sink',
  },
  {
    id: 8,
    img: '../../image8.png',
    title: 'Sink',
  },
  {
    id: 9,
    img: '../../image9.png',
    title: 'Sink',
  },
  {
    id: 10,
    img: '../../image10.png',
    title: 'Sink',
  },
  {
    id: 12,
    img: '../../image12.png',
    title: 'Sink',
  },



];
