import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            transform: selectedItem === item.id ? 'scale(1.5)' : 'scale(1)',
            zIndex: selectedItem === item.id ? 10 : 'auto',
            overflow: 'hidden',
            position: 'relative', // Ensure the content covers the entire container
          }}
        >
          {item.type === 'image' && (
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="rounded-md"
              style={{
                width: '100%', // Ensures the content takes up the full width of its container
                height: '100%', // Ensures the content takes up the full height of its container
                objectFit: 'cover', // Scales the image while maintaining its aspect ratio and cropping as needed to fill its container
              }}
            />
          )}
          {item.type === 'video' && (
            <div style={{ width: '100%', height: '100%' }}>
              <iframe

                autoPlay
                loop
                muted
                src={item.src}
                title={item.title}
                width="100%"
                height="100%"
                style={{ border: 'none' }} // Remove iframe border
              />
            </div>
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}



const itemData = [

  {
    id: 21,
    img: '../../image21.jpeg',
    title: '21',
    type: 'image',
  },
  {
    id: 1,
    img: '../../image1.jpeg',
    title: '1',
    type: 'image',
  },
  {
    id: 2,
    img: '../../image2.jpeg',
    title: '2',
    type: 'image',
  },
  {
    id: 16,
    img: '../../image16.jpeg',
    title: '16',
    type: 'image',
  },
  {
    id: 18,
    img: '../../image18.jpeg',
    title: '18',
    type: 'image',
  },
  {
    id: 3,
    img: '../../image3.jpeg',
    title: '3',
    type: 'image',
  },
  {
    id: 4,
    img: '../../image4.jpeg',
    title: '4',
    type: 'image',
  },
  {
    id: 15,
    img: '../../image15.jpeg',
    title: '15',
    type: 'image',
  },
  {
    id: 5,
    img: '../../image5.jpeg',
    title: '5',
    type: 'image',
  },
  {
    id: 6,
    img: '../../image6.jpeg',
    title: '6',
    type: 'image',
  },
  {
    id: 35,
    src: '../../video1.mp4',
    title: '35',
    type: 'video',
  },
  {
    id: 20,
    img: '../../image20.jpeg',
    title: '20',
    type: 'image',
  },
  {
    id: 11,
    img: '../../image11.jpeg',
    title: '11',
    type: 'image',
  },
  {
    id: 8,
    img: '../../image8.jpeg',
    title: '8',
    type: 'image',
  },
  {
    id: 17,
    img: '../../image17.jpeg',
    title: '17',
    type: 'image',
  },
  {
    id: 9,
    img: '../../image9.jpeg',
    title: '9',
    type: 'image',
  },
  {
    id: 10,
    img: '../../image10.jpeg',
    title: '10',
    type: 'image',
  },
  {
    id: 12,
    img: '../../image12.jpeg',
    title: '12',
    type: 'image',
  },
  {
    id: 13,
    img: '../../image13.jpeg',
    title: '13',
    type: 'image',
  },
  // {
  //   id: 16,
  //   img: '../../image16.jpeg',
  //   title: '16',
  //   type: 'image',
  // },
  {
    id: 33,
    img: '../../image33.jpeg',
    title: '33',
    type: 'image',
  },
  {
    id: 32,
    img: '../../image32.jpeg',
    title: '32',
    type: 'image',
  },
  {
    id: 31,
    img: '../../image31.jpeg',
    title: '31',
    type: 'image',
  },
  {
    id: 30,
    img: '../../image30.jpeg',
    title: '30',
    type: 'image',
  },
  {
    id: 29,
    img: '../../image29.jpeg',
    title: '29',
    type: 'image',
  },
  {
    id: 28,
    img: '../../image28.jpeg',
    title: '28',
    type: 'image',
  },
  {
    id: 27,
    img: '../../image27.jpeg',
    title: '27',
    type: 'image',
  },
  {
    id: 26,
    img: '../../image26.jpeg',
    title: '26',
    type: 'image',
  },
  {
    id: 25,
    img: '../../image25.jpeg',
    title: '25',
    type: 'image',
  },
  {
    id: 24,
    img: '../../image24.jpeg',
    title: '24',
    type: 'image',
  },
  {
    id: 22,
    img: '../../image22.jpeg',
    title: '22',
    type: 'image',
  },
  {
    id: 34,
    img: '../../image20.jpeg',
    title: '34',
    type: 'image',
  },

];



