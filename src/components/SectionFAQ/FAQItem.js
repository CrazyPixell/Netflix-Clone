import './FAQItem.css';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);

  const showAnswer = () => {
    !isShown ? setIsShown(true) : setIsShown(false);
  };

  return (
    <div className='faq__item'>
      <button className='faq__question' onClick={showAnswer}>
        {question}
        <div
          className={`${'faq__close'} ${isShown ? 'faq__close--rotate' : ''}`}
          onClick={showAnswer}
        >
          <img
            src='https://www.tripbase.com/images/x-close-icon-white.png'
            alt='Close icon'
          />
        </div>
      </button>
      <div className={`${'faq__answer'} ${isShown ? 'faq__answer--open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
