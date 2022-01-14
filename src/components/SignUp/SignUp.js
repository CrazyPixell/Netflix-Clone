import './SignUp.css';
import { useState, useRef } from 'react';
import { auth } from '../../firebase';

const SignUp = ({ language }) => {
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerHandler = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error =>
        alert(
          'Данный пользователь не найден! Введите люьые тестовые данные и нажмите на "Зарегистрируйтесь сейчас"'
        )
      );
  };

  const signInHandler = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => console.log(authUser))
      .catch(error =>
        alert(
          'Данный пользователь не найден! Введите люьые тестовые данные и нажмите на "Зарегистрируйтесь сейчас"'
        )
      );
  };

  return (
    <div className='sign-up'>
      <form>
        <h2>{language === 'russian' ? 'Войти' : 'Sign in'}</h2>
        <div className='sign-up__form-group'>
          <input
            type='email'
            id='sign-email'
            ref={emailRef}
            onClick={() =>
              emailRef.current.value.trim() === ''
                ? setEmailIsFocused(true)
                : setEmailIsFocused(false)
            }
          />
          <label
            htmlFor='sign-email'
            className={`${'sign-up__label'} ${
              emailIsFocused ? 'sign-up__label--active' : ''
            }`}
          >
            {language === 'russian'
              ? 'Адрес электронной почты'
              : 'Email Address'}
          </label>
        </div>
        <div className='sign-up__form-group'>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            onClick={() =>
              passwordRef.current.value.trim() === ''
                ? setPasswordIsFocused(true)
                : setPasswordIsFocused(false)
            }
          />
          <label
            htmlFor='password'
            className={`${'sign-up__label'} ${
              passwordIsFocused ? 'sign-up__label--active' : ''
            }`}
          >
            {language === 'russian' ? 'Пароль' : 'Password'}
          </label>
        </div>
        <button type='submit' onClick={signInHandler}>
          {language === 'russian' ? 'Войти' : 'Sign in'}
        </button>
        <h4>
          <span className='sign-up__new'>
            {language === 'russian'
              ? 'Впервые на Netflix ?'
              : 'New to Netflix ?'}
          </span>
          <span className='sign-up__sign' onClick={registerHandler}>
            {language === 'russian'
              ? 'Зарегистрируйтесь сейчас.'
              : 'Sign up now'}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
