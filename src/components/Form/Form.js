import './Form.css';

const Form = ({ language, className, onSignIn }) => {
  return (
    <form className={`${'form'} ${className}`}>
      <input type='email' id='email' />
      <label htmlFor='email' className='label'>
        {language === 'russian' ? 'Адрес электронной почты' : 'Email Address'}
      </label>
      <button onClick={onSignIn}>
        {language === 'russian' ? 'Начать Смотреть' : 'Get Started'}
      </button>
    </form>
  );
};

export default Form;
