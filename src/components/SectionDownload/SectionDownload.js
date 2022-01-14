import './SectionDownload.css';

const SectionDownload = ({ language }) => {
  return (
    <section className='section download'>
      <div className='download__img-box'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
          alt='Netflix screen'
        />
        <div className='download__card'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
            alt='movie poster'
            className='download__card-img'
          />
          <p className='download__card-text'>
            <span>
              {language === 'russian'
                ? 'Очень странные дела'
                : 'Stranger Things'}
            </span>
            <span>
              {language === 'russian' ? 'Идёт загрузка...' : 'Downloading...'}
            </span>
          </p>

          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
            alt='download icon'
            className='download__card-icon'
          />
        </div>
      </div>
      <div className='section__content'>
        <h2 className='section__title'>
          {language === 'russian'
            ? 'Загружайте сериалы для просмотра офлайн.'
            : 'Download your shows to watch offline.'}
        </h2>
        <p className='section__text'>
          {language === 'russian'
            ? 'Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.'
            : 'Save your favorites easily and always have something to watch.'}
        </p>
      </div>
    </section>
  );
};

export default SectionDownload;
