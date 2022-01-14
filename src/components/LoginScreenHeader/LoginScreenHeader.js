import './LoginScreenHeader.css';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import SignUp from '../SignUp/SignUp';

const LoginScreenHeader = ({ onLanguage, language, onSignIn, signedIn }) => {
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = e => {
    onLanguage(e.target.value);
  };

  const navbarScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);
    return () => window.removeEventListener('scroll', navbarScroll);
  }, []);

  return (
    <header
      className='login-header'
      style={{
        backgroundImage: `url(${
          language === 'russian'
            ? 'https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/d71577fb-2ea3-4d81-aee2-b03b69e9b8e9/RU-ru-20220103-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            : 'https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/d71577fb-2ea3-4d81-aee2-b03b69e9b8e9/RU-en-20220103-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        })`,
      }}
    >
      <div
        className={`login-header__upper ${
          scrolled && 'login-header__upper--black'
        }`}
      >
        <img
          className='login-header__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='Netflix logo'
        />
        <div className='login-header__actions'>
          <select
            name='language'
            id='labguage'
            className='login-header__language'
            onClick={changeLanguage}
          >
            <option value='russian'>Русский</option>
            <option value='english'>English</option>
          </select>
          <button onClick={onSignIn} className='login-header__btn'>
            {language === 'russian' ? 'Войти' : 'Sign in'}
          </button>
        </div>
      </div>
      <div className='login-header__gradient' />

      <div className='login-header__body'>
        {signedIn ? (
          <SignUp language={language} />
        ) : (
          <>
            ) : ({' '}
            <h1>
              {language === 'russian'
                ? 'Фильмы, сериалы и многое другое без ограничений.'
                : 'Unlimited movies, TV shows, and more.'}
            </h1>
            <h2>
              {language === 'russian'
                ? 'Смотрите где угодно. Отменить подписку можно в любое время.'
                : 'Watch anywhere. Cancel anytime.'}
            </h2>
            <p>
              {language === 'russian'
                ? 'Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.'
                : 'Ready to watch? Enter your email to create or restart your membership.'}
            </p>
            <Form onSignIn={onSignIn} language={language} />
          </>
        )}
      </div>
    </header>
  );
};

export default LoginScreenHeader;
