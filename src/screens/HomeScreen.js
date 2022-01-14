import './HomeScreen.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Trailer from '../components/Trailer/Trailer';
import Row from '../components/Row/Row';
import request from '../request';
import { useState } from 'react';

const HomeScreen = () => {
  const [trailer, setTrailer] = useState(null);
  const [language, setLanguage] = useState('russian');

  const changeLanguage = lang => {
    setLanguage(lang);
  };

  const playTrailer = trailerKey => {
    trailerKey ? setTrailer(trailerKey) : setTrailer(null);
  };

  return (
    <div className='homescreen'>
      <Navbar onLanguage={changeLanguage} />

      <Banner language={language} />

      {trailer && <Trailer trailerKey={trailer} />}

      <Row
        title='NETFLIX_ORIGINALS'
        fetchURL={`/discover/tv?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&with_networks=213&language=${
          language === 'russian' ? 'ru-RU' : 'en-US'
        }`}
        isLargeRow
        onPlayTrailer={playTrailer}
      />
      <Row
        title={language === 'russian' ? 'В Тренде' : 'Trending Now'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchTrending}
      />
      <Row
        title={language === 'russian' ? 'Топ в рейтинге' : 'Top Rated'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchTopRated}
      />
      <Row
        title={language === 'russian' ? 'Боевики' : 'Action'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchActionMovies}
        language={language}
      />
      <Row
        title={language === 'russian' ? 'Комедии' : 'Comedy'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchComedyMovies}
      />
      <Row
        title={language === 'russian' ? 'Ужасы' : 'Horrors'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchHorrorMovies}
      />
      <Row
        title={language === 'russian' ? 'Романтика' : 'Romance'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchRomanceMovies}
      />
      <Row
        title={language === 'russian' ? 'Документальное' : 'Documentary'}
        onPlayTrailer={playTrailer}
        fetchURL={request.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
