import './Row.css';
import { useState, useEffect, useRef } from 'react';
import axios from '../../axios';

const Row = ({
  onPlayTrailer,
  title,
  fetchURL,
  isLargeRow = false,
  language,
}) => {
  const [movies, setMovies] = useState([]);
  const movieRef = useRef();

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);

      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchURL]);

  const playTrailer = id => {
    const fetchTrailer = async () => {
      try {
        const videoRequest = await axios.get(
          `/movie/${id}/videos?api_key=${
            process.env.REACT_APP_TMDB_API_KEY
          }&language=${language === 'russian' ? 'ru-RU' : 'en-US'}`
        );

        if (videoRequest.status !== 200)
          throw new Error('Something went wrong');

        if (videoRequest.data.results.length > 0) {
          const trailer = videoRequest.data.results.filter(
            video => video.type === 'Trailer'
          )[0];
          onPlayTrailer(trailer.key);
        } else {
          onPlayTrailer(null);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrailer();
  };

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>

      <div className='row__posters'>
        {movies.map(
          movie =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                ref={movieRef}
                onClick={playTrailer.bind(null, movie.id)}
                alt={movie.name}
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__poster--large'}`}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
