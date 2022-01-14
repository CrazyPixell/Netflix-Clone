import './Banner.css';
import { useState, useEffect } from 'react';
import axios from '../../axios';
// import requests from '../../request';

const Banner = ({ language }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `/discover/tv?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&with_networks=213&language=${
          language === 'russian' ? 'ru-RU' : 'en-US'
        }`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, [language]);

  const truncateText = (string, numChar) => {
    return string?.length > numChar
      ? string.substr(0, numChar - 1) + '...'
      : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path
            ? movie?.backdrop_path
            : 'wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
        }")`,
        backgroundPosition: 'center top',
      }}
    >
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__btns'>
          <button className='banner__btn'>
            {language === 'russian' ? 'Смотреть' : 'Play'}
          </button>
          <button className='banner__btn'>
            {language === 'russian' ? 'Мой Плейлист' : 'My List'}
          </button>
        </div>
        <p className='banner__description'>
          {truncateText(`${movie?.overview}`, 150)}
        </p>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
