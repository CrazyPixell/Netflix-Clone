import './LoginScreenFooter.css';

const LoginScreenFooter = ({ language }) => {
  return (
    <footer className='login-footer'>
      <p className='login-footer__text'>
        {language === 'russian'
          ? 'Все права на бренд Netflix принадлежат Netflix. Данный клон создан Антоном Жирковым для персонального обучения и использования в портфолио.'
          : 'All rights to Netflix brand belong to Netflix. This clone was made by Anton Zhirkov in learning purposes only and for use in personal portfolio'}
      </p>
      <a className='login-footer__link' href='#'>
        {language === 'russian' ? 'Исходный код' : 'Source code'}
      </a>
    </footer>
  );
};

export default LoginScreenFooter;
