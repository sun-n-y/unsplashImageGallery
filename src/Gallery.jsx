import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Gallery = () => {
  const result = useQuery({
    queryKey: ['galleryImages'],
    queryFn: () =>
      axios.get(
        'https://api.unsplash.com/search/photos/?query=tiger&client_id=Oe7b-lrQ818X0izcd25pwf3dFrQ05Jk8tkCpruX4ESg'
      ),
  });

  console.log(result);

  return <h2>Gallery</h2>;
};

export default Gallery;
