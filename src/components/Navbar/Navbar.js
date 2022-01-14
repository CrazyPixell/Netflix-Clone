import './Navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
    <div className={`nav ${scrolled && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
          alt='Netflix logo'
          className='nav__logo'
          onClick={() => navigate('/')}
        />
        <div className='nav__actions'>
          <select
            name='language'
            id='labguage'
            className='nav__language'
            onClick={changeLanguage}
          >
            <option value='russian'>Русский</option>
            <option value='english'>English</option>
          </select>
          <img
            onClick={() => navigate('/profile')}
            src='https://cdn.dribbble.com/users/35810/screenshots/12863854/media/a47d93251876a69537c3ae3ac0122a6c.jpg?compress=1&resize=1200x900&vertical=top'
            alt='Avatar pic'
            className='nav__avatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
