import Navbar from '../components/Navbar/Navbar';
import './ProfileScreen.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {
  const [language, setLanguage] = useState('russian');
  const user = useSelector(selectUser);

  const changeLanguage = lang => {
    setLanguage(lang);
  };

  return (
    <div className='profile-screen'>
      <Navbar onLanguage={changeLanguage} />
      <div className='profile-screen__body'>
        <h2 className='profile-screen__title'>
          {language === 'russian' ? 'Изменить профиль' : 'Edit profile'}
        </h2>
        <div className='profile-screen__info'>
          <img
            src='https://cdn.dribbble.com/users/35810/screenshots/12863854/media/a47d93251876a69537c3ae3ac0122a6c.jpg?compress=1&resize=1200x900&vertical=top'
            alt='avatar'
            className='profile-screen__avatar'
          />
          <div className='profile-screen__detailes'>
            <p className='profile-screen__email'>{user.email}</p>
            <div className='profile-screen__plans'>
              <p className='profile-screen__user-plan'>
                {language === 'russian'
                  ? 'Планы (Действующий план: Премиум)'
                  : 'Plans (Current plan: Premium)'}
              </p>
              <p className='profile-screen__date'>
                {language === 'russian'
                  ? 'Дата обновления (21.07.2022)'
                  : 'Renewal date (21.07.2022)'}
              </p>
              <div className='profile-screen__plan-option'>
                <div className='profile-screen__plan-name'>
                  <span>
                    {language === 'russian' ? 'Стандартный' : 'Standard'}
                  </span>
                  <span>1080р</span>
                </div>
                <button className='profile-screen__plan-subscribe'>
                  {language === 'russian' ? 'Подписка' : 'Subscribe'}
                </button>
              </div>

              <div className='profile-screen__plan-option'>
                <div className='profile-screen__plan-name'>
                  <span>{language === 'russian' ? 'Базовый' : 'Basic'}</span>
                  <span>480р</span>
                </div>
                <button className='profile-screen__plan-subscribe'>
                  {language === 'russian' ? 'Подписка' : 'Subscribe'}
                </button>
              </div>

              <div className='profile-screen__plan-option'>
                <div className='profile-screen__plan-name'>
                  <span>{language === 'russian' ? 'Премиум' : 'Premium'}</span>
                  <span>4K + HDR</span>
                </div>
                <button className='profile-screen__plan-subscribe profile-screen__plan-subscribe--current'>
                  {language === 'russian' ? 'Активный план' : 'Current plan'}
                </button>
              </div>

              <button
                className='profile-screen__sign-out'
                onClick={() => auth.signOut()}
              >
                {language === 'russian' ? 'Выход' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
