import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['galleryImages'],
    queryFn: async () => {
      const result = await axios.get(
        'https://api.unsplash.com/search/photos/?query=pizza&client_id=Oe7b-lrQ818X0izcd25pwf3dFrQ05Jk8tkCpruX4ESg'
      );
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>there was an error</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>no results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
