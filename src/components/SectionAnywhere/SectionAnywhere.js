import './SectionAnywhere.css';

const SectionAnywhere = ({ language }) => {
  return (
    <section className='section anywhere'>
      <div className='section__content'>
        <h2 className='section__title'>
          {language === 'russian'
            ? 'Смотрите где угодно.'
            : 'Watch everywhere.'}
        </h2>
        <p className='section__text'>
          {language === 'russian'
            ? 'Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре без ограничений и без дополнительной платы.'
            : 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'}
        </p>
      </div>
      <div className='anywhere__img-box'>
        <div className='anywhere__video-box'>
          <video autoPlay={true} muted loop className='anywhere__video'>
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
              type='video/mp4'
            />
          </video>
        </div>
        <img
          src='	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
          alt='Netflix screen'
          className='anywhere__img'
        />
      </div>
    </section>
  );
};

export default SectionAnywhere;
