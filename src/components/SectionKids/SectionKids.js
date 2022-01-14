import './SectionKids.css';

const SectionKids = ({ language }) => {
  return (
    <section className='section kids'>
      <div className='kids__img-box'>
        <img
          src='https://occ-0-38-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'
          alt='Kids'
        />
      </div>
      <div className='section__content'>
        <h2 className='section__title'>
          {language === 'russian'
            ? 'Создавайте профили для детей.'
            : 'Create profiles for kids.'}
        </h2>
        <p className='section__text'>
          {language === 'russian'
            ? 'Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.'
            : 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
        </p>
      </div>
    </section>
  );
};

export default SectionKids;
