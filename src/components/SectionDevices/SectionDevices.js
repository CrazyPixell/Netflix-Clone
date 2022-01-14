import './SectionDevices.css';

const SectionDevices = ({ language }) => {
  return (
    <section className='section devices'>
      <div className='section__content'>
        <h2 className='section__title'>
          {language === 'russian'
            ? 'Смотреть на телевизоре.'
            : 'Enjoy on your TV.'}
        </h2>
        <p className='section__text'>
          {language === 'russian'
            ? 'Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.'
            : 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
        </p>
      </div>
      <div className='devices__img-box'>
        <div className='devices__video-box'>
          <video autoPlay={true} muted loop className='devices__video'>
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
              type='video/mp4'
            />
          </video>
        </div>
        <img
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
          alt='Netflix screen'
        />
      </div>
    </section>
  );
};

export default SectionDevices;
