import { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function ImageGallery() {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id)
  }

  return (
    <ImageList variant='masonry' cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            transform: selectedItem === item.id ? 'scale(1.5)' : 'scale(1)',
            zIndex: selectedItem === item.id ? 10 : 'auto',
            overflow: 'hidden',
          }}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
            className='rounded-md '
            style={{
              width: '100%', // Ensures the image takes up the full width of its container
              height: '100%', // Ensures the image takes up the full height of its container
              objectFit: 'cover', // Scales the image while maintaining its aspect ratio and cropping as needed to fill its container
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  // {
  //   id: 14,
  //   img: '../../image14.jpeg',
  //   title: 'meme',
  // },
  {
    id: 21,
    img: '../../image21.jpeg',
    title: 'Sink',
  },
  {
    id: 1,
    img: '../../image1.jpeg',
    title: 'Sink',
  },
  {
    id: 2,
    img: '../../image2.jpeg',
    title: 'Sink',
  },
  // {
  //   id: 15,
  //   img: '../../image15.jpeg',
  //   title: 'Sink',
  // },
  {
    id: 16,
    img: '../../image16.jpeg',
    title: 'Sink',
  },
   {
    id: 18,
    img: '../../image18.mp4',
    title: 'Sink',
  },

  {
    id: 3,
    img: '../../image3.jpeg',
    title: 'Sink',
  },

  {
    id: 4,
    img: '../../image4.jpeg',
    title: 'Sink',
  },
  {
    id:15,
    img:'../../image15.jpeg',
    title:'meme'

  },

  {
    id: 5,
    img: '../../image5.jpeg',
    title: 'Sink',
  },
  {
    id: 6,
    img: '../../image6.jpeg',
    title: 'Sink',
  },
  {
    id: 20,
    img: '../../image20.jpeg',
    title: 'Sink',
  },

  {
    id: 11,
    img: '../../image11.jpeg',
    title: 'Sink',
  },

  {
    id: 8,
    img: '../../image8.jpeg',
    title: 'Sink',
  },
  {
    id: 17,
    img: '../../image17.jpeg',
    title: 'Sink',
  },

  {
    id: 9,
    img: '../../image9.jpeg',
    title: 'Sink',
  },

  {
    id: 10,
    img: '../../image10.jpeg',
    title: 'Sink',
  },

  {
    id: 12,
    img: '../../image12.jpeg',
    title: 'Sink',
  },
  {
    id: 13,
    img: '../../image13.jpeg',
    title: 'meme',
  },
  {
    id: 16,
    img: '../../image16.jpeg',
    title: 'Sink',
  },
  {
    id: 33,
    img: '../../image33.jpeg',
    title: 'Sink',
  },
  {
    id: 32,
    img: '../../image32.jpeg',
    title: 'Sink',
  },
  {
    id: 31,
    img: '../../image31.jpeg',
    title: 'Sink',
  },
  {
    id: 30,
    img: '../../image30.jpeg',
    title: 'Sink',
  },
  {
    id: 29,
    img: '../../image29.jpeg',
    title: 'Sink',
  },
  {
    id: 28,
    img: '../../image28.jpeg',
    title: 'Sink',
  },
  {
    id: 27,
    img: '../../image27.jpeg',
    title: 'Sink',
  },
  {
    id: 26,
    img: '../../image26.jpeg',
    title: 'Sink',
  },
  {
    id: 25,
    img: '../../image25.jpeg',
    title: 'Sink',
  },
  {
    id: 24,
    img: '../../image24.jpeg',
    title: 'Sink',
  },
  {
    id: 22,
    img: '../../image22.jpeg',
    title: 'Sink',
  },
  {
    id: 21,
    img: '../../image21.jpeg',
    title: 'Sink',
  },
  {
    id: 34,
    img: '../../image20.jpeg',
    title: 'Sink',
  },
  // {
  //   id: 16,
  //   img: '../../image16.jpeg',
  //   title: 'Sink',
  // },
]
